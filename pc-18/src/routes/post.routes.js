const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middlewares/auth.middleware');
/**
 * POST /api/posts-[protected]
 * -req.body = {caption, imgUrl}
 * /api/posts/
 */

postRouter.post(
  '/',
  upload.single('imgUrl'),
  identifyUser,
  postController.createPostController
);

/**
 * GET /api/posts/
 * logged in user ke saare posts fetch karo
 */

postRouter.get('/', identifyUser, postController.getPostController);

/**
 * GET /api/posts/details/:postId - [protected]
 * specific post ki detail fetch karo
 * check karo ki post usi user ka hai jo request kar raha hai
 */
postRouter.get(
  '/details/:postId',
  identifyUser,
  postController.getPostDetailsController
);

module.exports = postRouter;
