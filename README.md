# HRnet - Employee Management Application

HRnet is an internal web application that allows users to create and manage employee records.  
This project is a modernized version of an existing jQuery-based application, rebuilt using React and modern tools.

## Table of Contents

- Overview
- Features
- Technologies
- Installation
- Usage
- Project Structure
- Performance Improvements
- Modal Component
- Future Improvements
- Author
- License

## Overview

The original HRnet application was built using jQuery and suffered from performance and maintainability issues.

This version has been fully migrated to a modern React stack, with improved performance, better scalability, and cleaner architecture.

## Features

- Create a new employee
- Form validation
- Modal confirmation on employee creation
- Store employees in Redux and localStorage
- Display employees in a dynamic data table
- Sorting, filtering, and pagination with AG Grid
- Global search functionality
- Responsive UI

## Technologies

- React
- Redux Toolkit
- React Router
- AG Grid
- SCSS
- Vite

## Installation

Clone the repository:

```bash
git clone https://github.com/mmaurach/Projet-14---HRnet.git
cd hrnet-react
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## Usage

### Create an Employee

- Fill out the form on the home page
- Click “Save”
- A confirmation modal appears
- The employee is stored in Redux and localStorage

### View Employees

- Navigate to “Current Employees”
- View all employees in a table
- Use:
  - column filters
  - sorting
  - search input
  - pagination

## Performance Improvements

Compared to the original jQuery version:

- Removed heavy DOM manipulation
- Replaced jQuery DataTables with AG Grid
- Improved rendering performance with React
- Centralized state management with Redux
- Reduced memory leaks

## Modal Component

A reusable modal component has been developed and published as an npm package:

```bash
npm install maxom-modal
```

Features:

- Customizable (size, colors, content)
- Close on overlay click
- Close on Escape key
- Reusable across projects

## Author

Maxime Mauracheea

## License

This project is licensed under the MIT License.
