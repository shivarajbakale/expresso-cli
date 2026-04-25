# Expresso CLI

A command-line tool for scaffolding TypeScript Express applications with Prisma, SQLite, and MVC architecture. Expresso CLI helps developers kickstart their projects with a sensible default structure, including controllers, routes, services, and database integration.

## Installation

Install the CLI globally via npm:

```bash
npm install -g expresso-cli-2
```

Or use it directly with npx without installing:

```bash
npx expresso-cli-2 <project-name>
```

## Usage

Create a new Express project with the following command:

```bash
npx expresso-cli-2 my-app
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

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure tests pass (`npm test`).
4. Submit a pull request with a clear description of your changes.

Please follow the existing code style and include tests for new functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Code of Conduct

Please note that this project adheres to a Code of Conduct. By participating, you are expected to uphold this code. See the [CODE_OF_CONDUCT](CODE_OF_CONDUCT) file for more information.
