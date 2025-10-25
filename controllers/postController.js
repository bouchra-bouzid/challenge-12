// controllers/postController.js
let posts = []; // stockage en mémoire

// GET - afficher tous les posts
exports.getAllPosts = (req, res) => {
  res.render("index", { posts });
};

// GET - afficher un seul post
exports.getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).send("Post not found");
  res.render("post", { post });
};

// GET - page pour créer un nouveau post
exports.getCreatePost = (req, res) => {
  res.render("new");
};

// POST - créer un nouveau post
exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.redirect("/");
};
