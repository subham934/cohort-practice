const express = require('express');
const userModel = require('../models/auth.model');
const userRoutes = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require("crypto");




/*
POST /api/auth/register
*/ 

userRoutes.post('/register', async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: 'User already exist with this email-ID',
    });
  }

  const hash = crypto.createHash("md5").update(password).digest('hex')

  const user = await userModel.create({
    email,
    name,
    password:hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  res.cookie('jwt_token', token);

  return res.status(201).json({
    message: 'User created successfully',
    user,
    token,
  });
});



userRoutes.get('/get-me', async (req, res) => {
  const token = req.cookies.jwt_token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById(decoded.id);

  return res.status(200).json({
    name: user.name,
    email: user.email,
  });
});



/*
POST /api/auth/login
*/ 

userRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: 'User not Found!!',
    });
  }

  const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: 'Invalid Password Credentials!!',
    });
  }

  const token = jwt.sign(
      {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  res.cookie('jwt_token', token);

  return res.status(200).json({
    message: 'User logged in successfully',
    token,
    user,
  });
});



module.exports = userRoutes;