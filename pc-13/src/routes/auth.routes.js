const express = require('express');
const userModel = require('../models/user.model');
const authRouter = express.Router();

const jwt = require('jsonwebtoken');
const crypto = require("crypto");




authRouter.post('/register', async (req, res) => {
  const { email, name, password } = req.body;


  // we dont give 500 error to people, for that we we use below method to give error message

  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: 'User already exist',
    });
  }


  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await userModel.create({
    email,
    password: hash,
    name,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );

  res.cookie('jwt_token', token);

  res.status(201).json({
    message: 'User Registered',
    user,
    token,
  });
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: 'User not found with this mail address',
    });
  }


  const isPasswordMatch = user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: 'Invalid Password, Try again!!!',
    });
  }
  
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie('jwt_token', token);

  res.status(200).json({
    message: 'User logged in successfully',
    user,
    token,
  });
});

module.exports = authRouter;
