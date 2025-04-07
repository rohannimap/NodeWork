// app.js
const express = require('express');
const app = express();
const port = 8080;

const postRoutes = require('./routes/postroutes');

app.use(express.json());
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(` server running on ${port}`);
});
