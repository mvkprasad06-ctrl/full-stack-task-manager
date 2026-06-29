# Full-Stack Task Manager

This is an end-to-end full-stack task management application built for internship capstone submission.

## Features

- User registration
- User login
- JWT authentication
- Add tasks
- View tasks
- Mark tasks as completed or pending
- Delete tasks
- Logout functionality
- MongoDB database integration

## Tech Stack

Frontend:
- React
- Vite
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## How to Run

Backend:

cd backend
npm install
npm run dev

Frontend:

cd frontend
npm install
npm run dev -- --port 3000

Backend runs on:

http://localhost:5050

Frontend runs on:

http://localhost:3000

## Deployment Links

Live Frontend:
https://full-stack-task-manager-seven.vercel.app/

Backend API:
https://task-manager-backend-rxg7.onrender.com

GitHub Repository:
https://github.com/mvkprasad06-ctrl/full-stack-task-manager

## Project Status

Completed successfully as a full-stack internship capstone project.

---

## Code Refactoring and Optimization

This project was refactored and optimized to improve code readability, maintainability, and performance.

### Refactoring Work Done

The backend code was improved by organizing the project into a cleaner structure with routes, controllers, middleware, and models. Repeated logic was reduced, variable names were made clearer, and error handling was improved to make the code easier to understand and maintain.

The frontend code was also cleaned by separating API logic, improving component readability, and reducing unnecessary repeated code. This made the project easier to update and debug.

### Optimization Work Done

The backend request flow was improved for task creation, fetching, updating, and deleting. The API responses were tested after the changes to make sure the project was still working correctly. Unnecessary repeated code was removed, and the overall structure was made more efficient.

### Performance / Testing Notes

The deployed backend API was tested using curl commands. Task creation and task fetching were working successfully on the live Render deployment. The changes improved maintainability, reduced code repetition, and made the project easier to scale and debug.

### Before Refactoring

Before refactoring, some code was repeated, the structure was less organized, and debugging was harder because related logic was spread across different files.

### After Refactoring

After refactoring, the code became cleaner, better organized, easier to read, and easier to maintain. Backend API handling and frontend API usage became more structured.

### Challenges Faced

While working on this task, I faced challenges in identifying repeated code and improving the structure without breaking the existing functionality. I also had to test the backend APIs after changes to make sure task creation, fetching, updating, and deleting were still working correctly on the deployed version.
