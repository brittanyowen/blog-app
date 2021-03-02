const db = require("../db/connection");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongoDB conncection error:"));

const main = async () => {
  const posts = [
    {
      author: "Huck",
      title: "my first blog post!",
      content: "not a very interesting blog :(",
      imgURL: "img not found ",
    },
    {
      author: "Zoe",
      title: "my blog",
      content: "nothing :(",
      imgURL:
        "https://images.unsplash.com/photo-1609372332255-611485350f25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      author: "Brittany",
      title: "Not Brittany Spears!",
      content: "Leave Brittany alone!",
      imgURL:
        "https://images.unsplash.com/photo-1613591630417-e8e8fe80855f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    },
  ];
  await Post.insertMany(posts);
  console.log("Created posts!");
};
const run = async () => {
  await main();
  db.close();
};
run();
