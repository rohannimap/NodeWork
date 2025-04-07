// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.get('/', postController.getAllPosts);
// router.get('/name', postController.getAllname);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.delete('/:id', postController.deletePost);

module.exports = router;
