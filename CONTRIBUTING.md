# Contributing to expresso-cli

Thank you for your interest in contributing to expresso-cli! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Issues

Before creating bug reports, please check the issue tracker to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible.

### Pull Requests

1. **Fork the repository** - Create your own fork of the project to make your changes.
2. **Create a branch** - Create a new branch for your feature or bugfix:
   ```
   git checkout -b feature/your-feature-name
   ```
   or for bugfixes:
   ```
   git checkout -b fix/your-bugfix-name
   ```
3. **Make your changes** - Implement your feature or bugfix.
4. **Test your changes** - Run the build process to ensure your changes don't break anything:
   ```
   npm run build
   ```
5. **Commit your changes** - Write clear and concise commit messages.
6. **Submit a pull request** - Push your branch to your fork and submit a pull request to the main repository.

## Development Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/expresso-cli.git
   ```
2. Navigate to the project directory:
   ```
   cd expresso-cli
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the project:
   ```
   npm run build
   ```

## Coding Standards

- Follow the existing code style and conventions.
- Write clear, commented code where necessary.
- Ensure that your code is properly formatted.

## Testing

Currently, the project does not have a comprehensive test suite. When submitting changes, make sure to:
- Run `npm run build` to verify that TypeScript compilation passes.
- Manually test any new features or bugfixes.

## Submitting Changes

When submitting a pull request, please:

1. Provide a clear description of the problem or feature.
2. Reference any related issues in your pull request description.
3. Ensure your code follows the project's coding standards.
4. Make sure all builds pass before requesting a review.

## Questions?

If you have any questions about contributing, feel free to open an issue or reach out to the maintainers.

Thank you for contributing to expresso-cli!
