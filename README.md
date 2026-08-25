# SauceDemo UI Test Automation

Automated UI tests for https://www.saucedemo.com using Playwright and JavaScript.

## IDE

Visual Studio Code (VS Code)

## Environment

- Node.js v18 or higher
- Browser: Chromium (Chrome) — Firefox also configured
- OS: Windows 11

## Setup

1. Install Node.js 
2. Clone or copy this project
3. Run `npm install`
4. Run `npx playwright install`

## How to run

```bash
npm test
```

To see the browser while running:

```bash
npm run test:headed
```

To open the HTML report after a run:

```bash
npm run test:report
```

## What the test does

1. Opens https://www.saucedemo.com
2. Logs in with username `standard_user` and password `secret_sauce`
3. Confirms the Products page loads
4. Adds the Sauce Labs Backpack to the cart
5. Confirms the cart shows 1 item
6. Logs out
7. Confirms the login page is shown again

## Project structure

```
config/testData.js       - test credentials and item names
pages/LoginPage.js       - login page actions
pages/InventoryPage.js   - inventory and cart actions
tests/saucedemo.spec.js  - the test
playwright.config.js     - browser and reporter settings
azure-pipelines.yml      - CI pipeline for Azure DevOps
```

## CI

The `azure-pipelines.yml` file runs the tests automatically on every push or pull request to `main`. Test results and screenshots are published as pipeline artifacts.
