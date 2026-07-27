const express = require('express');
const authController = require("../controllers/auth.controller.js")

const authRouter = express.Router();

/**
 * POST /api/auth/register
 * desc : register a new user
 * req.body : email, username, password, bio, profileImage
 */
authRouter.post('/register', authController.registerController);


authRouter.post("/login",authController.loginController)

module.exports = authRouter;
