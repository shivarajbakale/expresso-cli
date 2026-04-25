#!/usr/bin/env node
import { Command } from 'commander';
import fs from 'fs-extra';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const program = new Command();
program
    .name('express-scaffold')
    .description('Scaffold a TypeScript Express app with Prisma, SQLite, and MVC architecture.')
    .version('1.0.0')
    .argument('<project-name>', 'Name of the project to scaffold')
    .action(async (projectName) => {
    // Validate project name
    if (!/^[a-z0-9-]+$/.test(projectName)) {
        console.error('Error: Project name must be lowercase alphanumeric with hyphens.');
        process.exit(1);
    }
    const targetDir = path.join(process.cwd(), projectName);
    // Check if directory already exists
    if (await fs.pathExists(targetDir)) {
        console.error(`Error: Directory '${projectName}' already exists.`);
        process.exit(1);
    }
    // Create target directory
    await fs.ensureDir(targetDir);
    // Copy templates
    const templateDir = path.join(__dirname, '..', 'templates');
    await fs.copy(templateDir, targetDir);
    // Replace placeholders
    const filesToProcess = [
        path.join(targetDir, 'package.json'),
    ];
    for (const file of filesToProcess) {
        if (await fs.pathExists(file)) {
            let content = await fs.readFile(file, 'utf-8');
            content = content.replace(/{{PROJECT_NAME}}/g, projectName);
            await fs.writeFile(file, content);
        }
    }
    console.log('Installing dependencies...');
    try {
        execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
    }
    catch (error) {
        console.error('Failed to install dependencies.');
        process.exit(1);
    }
    console.log('Generating Prisma client...');
    try {
        execSync('npx prisma generate', { cwd: targetDir, stdio: 'inherit' });
    }
    catch (error) {
        console.error('Failed to generate Prisma client.');
        process.exit(1);
    }
    console.log(`\nProject '${projectName}' scaffolded successfully in ${targetDir}`);
    console.log('\nNext steps:');
    console.log(`  cd ${projectName}`);
    console.log('  npx prisma migrate dev --name init');
    console.log('  npm run dev');
});
program.parse();
