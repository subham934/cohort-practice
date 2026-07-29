const userModel = require('../models/user.model.js');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  // // check if a user already exist with this email

  // const isUserAlreadyExistByEmail = await userModel.findOne({email})

  // if(isUserAlreadyExistByEmail){
  //     return res.status(409).json({
  //         message: "User already exists with same email."
  //     })
  // }

  // // check if a user already exist with this username

  // const isUserAlreadyExistByUsername = await userModel.findOne({username})

  // if(isUserAlreadyExistByUsername){
  //     return res.status(409).json({
  //         message: "User already exists with this username."
  //     })
  // }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        'User already exist ' +
        (isUserAlreadyExist.email === email
          ? 'with this email'
          : 'with this username'),
    });
  }

  //   const hash = crypto.createHash('sha256').update(password).digest('hex');

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });

  const token = jwt.sign(
    {
      /*
            - user ka data hona chahiye,
            - data unique hona chahiye
      */
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'User created successfully',
    user: {
      name: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    return res.status(409).json({
      message: 'user not found!!!',
    });
  }

  //   const hash = crypto.createHash('sha256').update(password).digest('hex');

  //   if (user.password !== hash) {
  //     return res.status(401).json({
  //       message: 'Invalid Password!!!',
  //     });
  //   }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid Password!!!',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'user logged in successfully',
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = { registerController, loginController };
