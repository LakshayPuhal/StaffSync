
const express = require('express');
const { loginUser } = require('../controller/loginC'); // Import login controller
const jwt = require('jsonwebtoken'); // For JWT handling

const JWT_SECRET = 'your_secret_key'; // Replace with a secure key
const router = express.Router();


function authenticateToken(req, res, next) {
    const token = req.cookies.authToken; // Retrieve token from cookies
  
    if (!token) {
      return res.status(403).json({ message: 'Access denied, no token provided' });
    }
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
      req.user = user; // Attach user data to the request object
      next();
    });
}
  
  // Define POST /login route
  router.post('/', loginUser);
  
  // Example protected route
  router.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.username}` });
  });
  
  module.exports = router; // Export the router
  