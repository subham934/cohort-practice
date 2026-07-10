const express = require('express');
const userModel = require('../models/user.model');
const crypto = require('crypto');
const userRoutes = express.Router();
const jwt = require('jsonwebtoken');

/**
 * POST api/auth/register
 */

userRoutes.post('/register', async (req, res) => {
  const { name, password, email } = req.body;

  const userAlreadyExist = await userModel.findOne({ email });

  if (userAlreadyExist) {
    return res.status(409).json({
      message: 'User already exists',
    });
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex');

  const user = await userModel.create({ name, password: hash, email });

  const token = jwt.sign(
    {
      id: user._id,
    },

    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'User created successfully',
    user,
    token,
  });
});

/**
 * GET api/auth/get-me
 */

userRoutes.get('/get-me', async (req, res) => {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById(decoded.id);

  return res.status(201).json({
    message: 'Here is your data',
    user,
  });
});

/**
 * POST api/auth/login
 */

userRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: 'User not found.',
    });
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex');

  const isPasswordMatch = hash === user.password;

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: 'Invalid password.',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'User logged in successfully!!!',
    user,
    token,
  });
});

module.exports = userRoutes;
