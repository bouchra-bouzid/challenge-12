const Post = require("../models/post");

// GET all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render("index", { posts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("post", { post });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET page to create new post
exports.getCreatePost = (req, res) => {
  res.render("new");
};

// POST create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// DELETE a post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// UPDATE a post (GET the edit form)
exports.getEditPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("edit", { post });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// UPDATE a post (POST the changes)
exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Post.findByIdAndUpdate(req.params.id, { title, content });
    res.redirect(`/posts/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
