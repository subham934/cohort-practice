const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  // token check karo
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized Access',
    });
  }

  // verify token
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token is not valid',
    });
  }

  //    Image ko ImageKit pe upload karo
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'instaDoodle',
  });

  //   Post ko database mein save karo

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  //   Response bhejo
  res.status(201).json({
    message: 'Post created Successfully',
    post,
  });
}

module.exports = {
  createPostController,
};
