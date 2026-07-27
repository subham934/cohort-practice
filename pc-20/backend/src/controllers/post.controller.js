const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  // console.log(req.body, req.file);

  // step 1: check token

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized access..',
    });
  }

  // step 2: token verify karo

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token not valid, Unauthorized access..',
    });
  }

  // step 3: Image ko imagekit pe upload karo

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'posts',
  });

  // Step 4: Post ko database mein save karo
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url, // imagekit ka URL
    user: decoded.id, // token se nikala hua userId
  });

  // step 5: Response bhejo

  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
}

module.exports = { createPostController };
