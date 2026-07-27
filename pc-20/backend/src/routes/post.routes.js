const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });



/**
 * POST /api/posts/ - [protected]
 * req.body = { caption }
 * req.file = { imgUrl }
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

postRouter.get("/", postController.getPostController);


/**
 * GET /api/posts/details/:postId - [protected]
 * specific post ki detail fetch karo
 * check karo ki post usi user ka hai jo request kar raha hai
 */
postRouter.get("/details/:postId", postController.getPostDetailsController);


module.exports = postRouter;
