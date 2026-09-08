# Contact Manager

A modern and responsive contact management application built with React, TypeScript and Redux Toolkit.

Contact Manager provides a clean workspace for creating, searching, editing and organizing contacts while keeping data persisted locally in the browser.

## Features

- Create, edit and remove contacts
- Real-time search by name, email or phone number
- LocalStorage data persistence
- Duplicate protection for names, emails and phone numbers
- Automatic phone number formatting
- Email normalization and validation
- Form validation with contextual error messages
- Delete confirmation
- Success and removal notifications
- Empty and no-results states
- Clickable email and phone actions
- Automatically generated contact initials
- Responsive layout for desktop, tablet and mobile
- Modern dark UI with glassmorphism-inspired elements

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- React Router
- Styled Components
- LocalStorage
- HTML5
- CSS3

## Application Overview

### Contact Dashboard

The main dashboard provides an overview of saved contacts and includes instant search functionality.

Contacts are displayed in responsive cards containing:

- Name
- Email address
- Phone number
- Generated initials
- Edit action
- Remove action

Email addresses and phone numbers can also be opened directly through their respective links.

### Contact Creation

The contact creation flow includes:

- Full name validation
- Email validation and normalization
- Automatic phone formatting
- Duplicate detection
- Clear validation feedback

The application prevents contacts from being created when another saved contact already uses the same name, email address or phone number.

### Contact Editing

Existing contacts can be edited directly from the dashboard.

The same validation and duplicate-protection rules used during contact creation are also applied when editing.

A contact may keep its own existing information, but cannot be updated with data that belongs to another contact.

### Local Persistence

Contact data is persisted using the browser's LocalStorage API.

This means contacts remain available after refreshing or reopening the application in the same browser.

No external backend or database is required for the current version.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/herick-gomes/lista-contatos.git