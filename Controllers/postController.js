const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      date: req.body.date,
      image: req.file.filename,
    });
    const postData = await post.save();
    res.status(200).send({ success: true, msg: "Post Data", data: postData });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({ success: true, msg: "hii", data: posts });
  } catch (error) {
    res.status(400).send({ success: false, msg: "close" });
  }
};

module.exports = {
  createPost,
  getPosts,
};
