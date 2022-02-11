const Post = require("../schemas/post");

// TODO: implementar middleware que funcione como global exception filter, dentro de los servicios vamos a tirar nuestras custom exceptions

const getPosts = async () => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async ({ title, body }) => {
  try {
    const newPost = Post.create({
      title,
      body,
    });

    return newPost;
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    const post = await Post.deleteOne({
      _id: id,
    });

    return post;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const post = await Post.find({
      _id: id,
    });

    return post;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async ({ id: _id, title, body }) => {
  try {
    const newPost = await Post.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          title,
          body,
        },
      }
    );

    return newPost;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
  getById,
  updatePost,
};
