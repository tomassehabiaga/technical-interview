/* El controller es el encargado de manejar y responder a las pegadas a la api. 
    Separar en capas nos permite 
*/
const PostService = require("./post.service");

const getPosts = async (req, res) => {
  const result = await PostService.getPosts();

  return res.status(200).json(result);
};

const createPost = async (req, res) => {
  const result = await PostService.createPost(req.body);

  return res(201).send(result);
};

const deletePost = async (req, res) => {
  const {
    params: { id: _id },
  } = req;

  const result = PostService.delete(id);

  return res.status(204).json(result);
};

const getPostById = async (req, res) => {
  const {
    params: { id: _id },
  } = req;

  const post = await PostService.getById(id);

  return res.status(200).json(post);
};

const updatePosts = async (req, res) => {
  const result = await PostService.updatePost(req.body);

  return res.status(200).json(newPost);
};
