import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModels.js'; 
// Middleware to protect routes and ensure the user is authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;        
    // Check if the JWT token is present in cookies 
    if (req.cookies && req.cookies.jwt) {
      try {
        token = req.cookies.jwt; // Get token from cookies  
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = await User.findById(decoded.userId).select('-password'); // Get user from the token and exclude password
        next(); // Proceed to the next middleware or route handler
      } catch (error) {
        res.status(401);
        throw new Error('Not authorized, token failed');
      }         
    }
    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
});

export { protect };