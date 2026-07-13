const express = require('express');
const authController = require("../controllers/auth.controller")


const authRoutes = express.Router();

authRoutes.post('/register',authController.registerUser);

authRoutes.post('/login', authController.loginUser);

module.exports = authRoutes;
