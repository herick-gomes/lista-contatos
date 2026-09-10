# Contact Manager

[![CI](https://github.com/herick-gomes/lista-contatos/actions/workflows/ci.yml/badge.svg)](https://github.com/herick-gomes/lista-contatos/actions/workflows/ci.yml)

A modern and responsive contact management application built with React, TypeScript and Redux Toolkit.

Contact Manager provides a clean workspace for creating, searching, editing and organizing contacts while keeping data persisted locally in the browser.

## Live Demo

**[Open Contact Manager](https://lista-contatos-silk.vercel.app/)**

---

## About the Project

Contact Manager is a front-end application designed to demonstrate practical contact-management workflows using React and centralized state management.

The project was originally developed as part of my front-end studies and later redesigned and expanded into a more complete portfolio application.

The portfolio version introduces a new interface, stronger validation rules, persistent storage, instant search, duplicate protection, responsive behavior, automated end-to-end testing and continuous integration.

The original course version is preserved separately in the `course-final` branch.

---

## Features

- Create contacts
- Edit existing contacts
- Remove contacts
- Real-time search by name, email or phone number
- LocalStorage data persistence
- Duplicate protection
- Automatic phone number formatting
- Email normalization
- Email validation
- Contextual form validation
- Delete confirmation
- Success notifications
- Removal notifications
- Empty-state interface
- No-results search state
- Clickable email links
- Clickable phone links
- Automatically generated contact initials
- Responsive desktop, tablet and mobile layouts
- Modern dark user interface
- Cypress end-to-end tests
- Automated CI with GitHub Actions

---

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- React Router
- Styled Components
- Cypress
- GitHub Actions
- LocalStorage
- HTML5
- CSS3

---

## Application Overview

### Contact Dashboard

The main dashboard provides an overview of all saved contacts.

Each contact is displayed in a responsive card containing:

- Name
- Email address
- Phone number
- Generated initials
- Edit action
- Remove action

Email addresses and phone numbers can also be opened directly through their corresponding links.

---

## Real-Time Search

The dashboard includes instant filtering without requiring a page reload or form submission.

Users can search by:

- Name
- Email
- Phone number

The contact list updates immediately as the search query changes.

When no matching contacts are found, the application displays a dedicated no-results state.

---

## Contact Creation

The contact creation experience validates information before adding it to the contact list.

Validation includes:

- Required name
- Valid email address
- Required phone number
- Email normalization
- Automatic phone formatting
- Duplicate detection

The application prevents a new contact from being created when another saved contact already uses the same normalized name, email address or phone number.

---

## Contact Editing

Existing contacts can be edited directly from the dashboard.

The same validation and duplicate-protection rules used during contact creation also apply when editing a contact.

A contact may keep its own current information, but cannot be updated with data that already belongs to another saved contact.

---

## Duplicate Protection

Duplicate detection compares normalized contact information.

The application checks:

```text
Name
Email
Phone Number
```

before creating or updating a contact.

This prevents accidental duplicate records and keeps the contact list more consistent.

---

## Local Persistence

Contact information is persisted using the browser's `localStorage` API.

This means saved contacts remain available after:

- Refreshing the page
- Closing and reopening the browser
- Returning to the application later

No external backend or database is required for the current version.

---

## Notifications

The application provides visual feedback for important user actions.

Notifications are displayed after operations such as:

- Creating a contact
- Updating a contact
- Removing a contact

This provides immediate confirmation that an action was completed successfully.

---

## Delete Confirmation

Removing a contact requires confirmation before the record is deleted.

This helps prevent accidental removals from the contact list.

---

## Responsive Design

Contact Manager was designed to work across multiple viewport sizes.

The interface adapts for:

```text
Desktop
Tablet
Mobile
```

The contact grid, forms, navigation, actions and spacing adjust according to the available screen width.

---

## Interface Design

The portfolio version introduces a modern dark interface with:

- Layered dark surfaces
- High-contrast typography
- Accent elements
- Rounded contact cards
- Responsive grids
- Clear form hierarchy
- Hover and interaction states
- Glassmorphism-inspired visual details

The goal was to turn the original educational project into a cleaner and more polished product experience.

---

## State Management

Redux Toolkit is used to manage the application's contact state.

Centralized state management keeps contact operations predictable and separates application data from individual UI components.

The contact state is synchronized with `localStorage` so that changes remain available between browser sessions.

---

## End-to-End Testing

The application includes an automated end-to-end test suite built with Cypress.

The current suite verifies the main user journeys:

- Application loading
- Contact creation
- LocalStorage persistence
- Invalid form data validation
- Contact search
- Contact editing
- Contact removal

Tests run against the application in a real browser environment and validate both interface behavior and persisted data.

Run the end-to-end suite locally with:

```bash
npm run test:e2e
```

To open the interactive Cypress interface:

```bash
npm run test:e2e:open
```

The application must be running locally before executing the Cypress tests.

---

## Continuous Integration

GitHub Actions automatically validates the project whenever code is pushed to `main` or a pull request targets `main`.

The CI pipeline performs the following steps:

```text
Checkout repository
        ↓
Install Node.js
        ↓
Install dependencies
        ↓
Build application
        ↓
Start application
        ↓
Run Cypress E2E tests
```

A change is considered successful only after the production build and end-to-end test suite complete successfully.

This helps catch regressions before new code is integrated into the main branch.

---

## Project Structure

The project follows a component-based React architecture, separating interface components, pages, state management, styling and automated testing concerns.

A simplified structure looks like:

```text
lista-contatos/
├── .github/
│   └── workflows/
│       └── ci.yml
├── cypress/
│   └── e2e/
│       └── contact-manager.cy.ts
├── src/
│   ├── components/
│   ├── containers/
│   ├── models/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   └── utils/
├── cypress.config.ts
├── package.json
└── README.md
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/herick-gomes/lista-contatos.git
```

Enter the project directory:

```bash
cd lista-contatos
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm start
```

Runs the application in development mode.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### React Tests

```bash
npm test
```

Starts the React testing environment.

### Cypress E2E Tests

```bash
npm run test:e2e
```

Runs the Cypress end-to-end test suite in headless mode.

### Cypress Interactive Mode

```bash
npm run test:e2e:open
```

Opens the Cypress interactive testing interface.

---

## Validation

The application performs validation before creating or updating contacts.

Validation covers:

- Empty fields
- Email format
- Normalized email addresses
- Phone formatting
- Duplicate names
- Duplicate email addresses
- Duplicate phone numbers

Validation feedback is displayed directly in the form to help users correct invalid information.

---

## Project Evolution

The initial version was developed as an educational React and Redux exercise.

For the portfolio version, the project was substantially expanded:

```text
Course Exercise
      ↓
Basic Contact List
      ↓
Validation & Persistence
      ↓
Search & UX Improvements
      ↓
Complete Visual Redesign
      ↓
Cypress E2E Testing
      ↓
GitHub Actions CI
      ↓
Contact Manager
```

The portfolio upgrade included:

- New visual identity
- Responsive dashboard
- LocalStorage persistence
- Real-time search
- Duplicate protection
- Stronger form validation
- Phone formatting
- Email normalization
- Delete confirmation
- User feedback notifications
- Better empty states
- Improved edit workflow
- Clickable contact actions
- Responsive form experience
- Cypress end-to-end coverage
- Automated production build validation
- Continuous integration with GitHub Actions

This evolution demonstrates the process of taking a simple educational exercise and turning it into a more complete and professionally validated front-end application.

---

## What This Project Demonstrates

Contact Manager demonstrates practical experience with:

- React component architecture
- TypeScript
- Redux Toolkit
- Centralized application state
- Client-side persistence
- Form validation
- Data normalization
- Duplicate detection
- Search and filtering
- Styled Components
- Responsive Web Design
- Front-end UX patterns
- End-to-end testing with Cypress
- Automated CI pipelines
- GitHub Actions
- Production build validation

---

## Portfolio Context

Contact Manager is a portfolio project created to demonstrate front-end development skills through a practical CRUD-style application.

Beyond the interface itself, the project now includes automated browser testing and continuous integration to demonstrate a more complete development workflow.

The current version stores information locally in the browser and does not use a remote database or authentication system.

---

## Author

**Herick Gomes**

Front-End Developer focused on building responsive and interactive web experiences with React, TypeScript and JavaScript.

GitHub:

```text
https://github.com/herick-gomes
```