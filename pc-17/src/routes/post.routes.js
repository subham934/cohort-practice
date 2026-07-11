const express = require('express');
const postController = require('../controllers/post.controller');
const postRouter = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /api/posts-[protected]
 * -req.body = {caption, imgUrl}
 * /api/posts/
 */

postRouter.post(
  '/',
  upload.single('imgUrl'),
  postController.createPostController
);

/**
 * GET /api/posts/ - [protected]
 * logged-in user ke saare posts fetch karo
 */

postRouter.get('/', postController.getPostController);

/**
 * GET /api/posts/details/:postid
 *
 * return an detail about specific post with the id. also check whether the post belongs to the  user that the request come from
 */

postRouter.get('/details/:postId', postController.getPostDetailsController);

module.exports = postRouter;
