# Cypress E2E Test Examples

A comprehensive collection of end-to-end test implementations using Cypress, featuring real-world testing scenarios across multiple web applications. This project demonstrates best practices for automated testing with practical examples from popular demo websites.

## Test Coverage

This project includes comprehensive E2E test suites for the following applications:

### 🛒 **Sauce Demo**
- E-commerce testing scenarios
- User authentication flows
- Shopping cart functionality
- Product catalog interactions
- Checkout processes

### 🏦 **Paabank**
- Banking application workflows
- Financial transaction testing
- Account management features
- Security validation scenarios

### 🔧 **DemoQA**
- Various UI component testing
- Form submissions and validations
- Interactive element testing
- Web automation scenarios

## Features

- **Real-World Examples**: Practical test cases based on actual web applications
- **Best Practices**: Demonstrates proper Cypress testing methodologies
- **Comprehensive Coverage**: Tests for authentication, navigation, forms, and transactions
- **Maintainable Code**: Well-structured test organization and reusable components
- **Cross-Browser Testing**: Compatible with multiple browsers and environments

## Prerequisites

- **Node.js** (version 14.x or higher)
- **npm** or **yarn** package manager
- Basic understanding of JavaScript and web testing concepts

## Installation

### Install Cypress

Choose your preferred package manager to install Cypress:

#### Using npm
```bash
npm install cypress --save-dev
```

#### Using yarn
```bash
yarn add cypress --dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

### Getting Started

For detailed installation instructions and setup guidance, visit the [official Cypress documentation](https://on.cypress.io/install).

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd cypress-e2e-examples
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Open Cypress Test Runner**
   ```bash
   npx cypress open
   # or
   yarn cypress open
   ```

4. **Run Tests Headlessly**
   ```bash
   npx cypress run
   # or
   yarn cypress run
   ```

## Project Structure

```
cypress-e2e-examples/
├── cypress/
│   ├── integration/        # Test specifications
│   │   ├── saucedemo/     # Sauce Demo test cases
│   │   ├── paabank/       # Paabank test cases
│   │   └── demoqa/        # DemoQA test cases
│   ├── fixtures/          # Test data files
│   ├── plugins/           # Cypress plugins
│   ├── support/           # Support files and commands
│   └── screenshots/       # Test failure screenshots
├── cypress.config.js      # Cypress configuration
└── package.json          # Project dependencies
```

## Test Categories

### Authentication Tests
- Login/logout functionality
- User registration processes
- Password reset workflows
- Session management

### E-commerce Tests
- Product browsing and filtering
- Shopping cart operations
- Checkout processes
- Payment workflows

### Form Testing
- Input validation
- Form submission
- Error handling
- Data persistence

### UI Component Tests
- Button interactions
- Navigation testing
- Modal and popup handling
- Responsive design validation

## Running Tests

### Interactive Mode
Launch the Cypress Test Runner for interactive testing:
```bash
npm run cypress:open
```

### Headless Mode
Execute tests in headless mode for CI/CD integration:
```bash
npm run cypress:run
```

### Specific Test Files
Run individual test suites:
```bash
npx cypress run --spec "cypress/integration/saucedemo/**/*"
```

### Browser Selection
Run tests on specific browsers:
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## Configuration

### Environment Variables
Configure test environments in `cypress.config.js`:
```javascript
{
  env: {
    saucedemo_url: 'https://www.saucedemo.com',
    paabank_url: 'https://paabank.com',
    demoqa_url: 'https://demoqa.com'
  }
}
```

### Custom Commands
Reusable commands are defined in `cypress/support/commands.js`:
- Login helpers
- Data setup utilities
- Common assertions

## Best Practices Demonstrated

- **Page Object Model**: Organized test structure with page objects
- **Data-Driven Testing**: Using fixtures for test data
- **Custom Commands**: Reusable test utilities
- **Proper Assertions**: Comprehensive validation strategies
- **Error Handling**: Robust test failure management

## CI/CD Integration

The project is configured for continuous integration with:
- **GitHub Actions**: Automated test execution
- **Jenkins**: CI/CD pipeline integration
- **Docker**: Containerized test execution

## Contributing

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/new-tests`
3. **Add Test Cases**: Include comprehensive test scenarios
4. **Follow Conventions**: Maintain consistent coding style
5. **Submit Pull Request**: Share your improvements

### Guidelines for New Tests
- Use descriptive test names
- Include proper assertions
- Add comments for complex scenarios
- Update documentation as needed

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)
- [Community Examples](https://github.com/cypress-io/cypress-example-recipes)

## Support

For questions or issues:
- Check the [Cypress documentation](https://docs.cypress.io/)
- Review existing test implementations
- Open an issue on GitHub
- Join the Cypress community discussions

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Testing!** 🧪✨