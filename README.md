Full-Stack MERN Authentication App

A complete authentication system built with the MERN stack (MongoDB, Express, React, Node.js).
This app includes secure JWT-based authentication, protected routes, user profile management, and responsive UI components.

Features

🔐 User Authentication (Register, Login, Logout)

🧾 Profile Management (View & Update Profile)

🍪 JWT Auth with HTTP-Only Cookies for enhanced security

⚙️ Custom Middleware for token validation and error handling

💅 Responsive UI built with React Bootstrap

🔔 Toast Notifications using React Toastify

🌍 MongoDB Atlas integration


Tech Stack

Frontend: React, React Bootstrap, React Router, Toastify

Backend: Node.js, Express.js, MongoDB, Mongoose

Auth: JSON Web Token (JWT) with cookies

Environment Variables

Create a .env file in the root and add:

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = your secret key

Installation
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

Run the App
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

Build for Production
cd frontend
npm run build
