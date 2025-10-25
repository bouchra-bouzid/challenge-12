const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Home & posts
router.get("/", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);

// Create new post
router.get("/new", postController.getCreatePost);
router.post("/posts", postController.createPost);

// Edit post
router.get("/posts/edit/:id", postController.getEditPost);
router.post("/posts/edit/:id", postController.updatePost);

// Delete post
router.post("/posts/delete/:id", postController.deletePost);

module.exports = router;
