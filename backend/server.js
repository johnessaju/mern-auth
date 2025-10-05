import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import path from 'path';

// dotenv.config() loads environment variables from the .env file into process.env
// Use it to keep sensitive info (DB credentials, API keys) out of code and manage configs per environment
dotenv.config();

connectDB(); // connect to database

const port = process.env.PORT || 5000;
const app = express();

app.use(cookieParser()); // to parse cookies from the request

app.use(express.json()); // to accept json data in body
app.use(express.urlencoded({ extended: true })); // to accept url encoded data in body

// routes
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist'))); // serve static files from frontend/build in production
  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  }); // serve index.html for any route not handled by api routes (for client-side routing in React)
} else {
  app.get('/', (req, res) => {
    res.send('server is ready');
  });
}

// error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started at port:${port}`);
});
