const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

// Signup route
router.post('/signup', [
    check('email').isEmail().withMessage('Please enter a valid email'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], authController.signup);

// Login route
router.post('/login', [
    check('email').isEmail().withMessage('Please enter a valid email'),
    check('password').exists().withMessage('Password is required')
], authController.login);

module.exports = router;