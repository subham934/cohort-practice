const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  // Step 1: Token check karo
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized access.',
    });
  }

  // Step 2: Token verify karo
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid Token, Unauthorized access.',
    });
  }

  // Step 3: Image ko ImageKit pe upload karo
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'cohort-2-instaclone-posts',
  });

  // Step 4: Post ko database mein save karo
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url, // imagekit ka URL
    user: decoded.id, // token se nikala hua userId
  });

  // Step 5: Response bhejo
  res.status(201).json({
    message: 'Post created Successfully',
    post,
  });
}

module.exports = { createPostController };
