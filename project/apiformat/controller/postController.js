// controllers/postController.js
let posts = require('../data/posts');

// GET all posts
exports.getAllPosts = (req, res) => {
  res.json(posts);
};
// exports.getAllname = (req, res) => {
//   res.json(posts.name);
// };

// GET one post by ID
exports.getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  res.json(post);
};

// CREATE new post
exports.createPost = (req, res) => {
  const { username, content } = req.body;
  const id = Date.now().toString(); // simple ID
  const newPost = { id, username, content };
  posts.push(newPost);
};

// DELETE post by ID
exports.deletePost = (req, res) => {
  const { id } = req.params;
  const found = posts.find((p) => p.id === id);
  posts = posts.filter((p) => p.id !== id);
  res.json({ message: "Post deleted" });
};
