# LiveHeats Race Web App

A simple React application to create races, manage participants, and record race results.

---

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or [yarn](https://yarnpkg.com/)

---

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies required to run the application.

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs unit tests using **Jest** and **React Testing Library**.

### `npm run test:e2e`

Runs all **end-to-end (E2E)** tests in **headless mode** using **Playwright**.

### `npm run test:e2e:ui`

Runs all **E2E tests in headed (UI) mode** with the Playwright test runner.

## Run the app locally

After running `npm install`, you can run `npm start` to start the app locally at [http://localhost:3000](http://localhost:3000).

## TODOS: [future work]

- Use Database for persistene. Currently everything is stored locally in the state.
- Integrate with an external API server that handles the CRUD operations for races, participants, and results.
- Improve the CSS and UI asthetics.
