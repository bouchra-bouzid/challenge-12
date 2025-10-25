// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.get("/new", postController.getCreatePost);
router.post("/posts", postController.createPost);

module.exports = router;
