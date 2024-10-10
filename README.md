# Student Record Management System

This is a **Student Record Management System** built with React, TypeScript, Formik, Yup, Material-UI, and Tailwind CSS. Users can manage student records by adding, editing, deleting, and searching students. The data is stored in local storage to persist across sessions.

## Features

- Add new student records
- Edit existing student records
- Delete student records
- Search students by name
- Data persistence using Local Storage
- Responsive and mobile-friendly UI using Tailwind CSS and Material-UI

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-record-management.git
Navigate into the project directory:

bash
Copy code
cd student-record-management
Install the dependencies:

bash
Copy code
npm install
Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See more about running tests.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready for deployment!

npm run eject
Note: This is a one-way operation. Once you eject, you can't go back!
If you need more control over the project, you can run eject to reveal the underlying configuration (webpack, Babel, ESLint, etc.). However, this is generally not needed for most projects.

Running the Application
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.

Project Structure
src/components: Contains reusable components like StudentForm, StudentTable, and SearchBar.
src/types.ts: Contains type definitions for the Student data model.
src/App.tsx: The main component that ties together form submissions, search functionality, and local storage integration.
Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: Strongly typed superset of JavaScript.
Formik & Yup: Form handling and validation.
Material-UI: React component library for modern, accessible UI elements.
Tailwind CSS: Utility-first CSS framework for designing responsive layouts.
Local Storage: For storing and persisting data between sessions.
