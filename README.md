# Expresso CLI

[![npm version](https://img.shields.io/npm/v/expresso-cli.svg)](https://www.npmjs.com/package/expresso-cli)
[![CI](https://github.com/yourusername/expresso-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/expresso-cli/actions/workflows/ci.yml)

A command-line tool for scaffolding TypeScript Express applications with Prisma, SQLite, and MVC architecture. Expresso CLI helps developers kickstart their projects with a sensible default structure, including controllers, routes, services, and database integration.

## Installation

Install the CLI globally via npm:

```bash
npm install -g expresso-cli
```

Or use it directly with npx without installing:

```bash
npx expresso-cli <project-name>
```

## Usage

Create a new Express project with the following command:

```bash
npx expresso-cli my-app
```

This will generate a new directory `my-app` with a fully scaffolded Express + TypeScript + Prisma + SQLite project.

After scaffolding, navigate into the project and install dependencies:

```bash
cd my-app
npm install
```

Generate the Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

Start the development server:

```bash
npm run dev
```

## Features

- **TypeScript**: Full TypeScript support out of the box.
- **Express**: Lightweight and flexible Node.js web framework.
- **Prisma**: Modern ORM for type-safe database access.
- **SQLite**: File-based database, zero configuration required.
- **MVC Architecture**: Clean separation of concerns with controllers, routes, and services.
- **Vitest**: Fast and modern testing framework included for unit and integration tests.

## Project Structure

The scaffolded project follows this structure:

```
my-app/
├── src/
│   ├── controllers/    # Request handlers and business logic coordination
│   ├── routes/         # Express route definitions
│   ├── services/       # Business logic and data access
│   ├── app.ts          # Express app configuration
│   └── server.ts       # Server entry point
├── prisma/
│   └── schema.prisma   # Prisma schema definition
├── tests/              # Vitest test files
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

- **src/controllers**: Contains controller classes that handle incoming requests and coordinate responses.
- **src/routes**: Defines Express routes and maps them to controller methods.
- **src/services**: Encapsulates business logic and interacts with Prisma for database operations.
- **prisma**: Houses the Prisma schema and migration files for database management.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

## Changelog

See the [CHANGELOG](CHANGELOG.md) for a history of changes and releases.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Code of Conduct

Please note that this project adheres to a Code of Conduct. By participating, you are expected to uphold this code. See the [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) file for more information.
