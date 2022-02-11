/* Importante tener un archivo para definir las rutas a las que la api respondera. Uno por cada recurso */

const express = require("express");

const postController = require("./post.controller");

const api = express.Router();

api.get("/posts", postController.getPosts);

api.post("/posts", postController.createPost);

api.delete("/posts/:id", postController.deletePost);

api.get("/posts/:id", postController.getPostById);

api.patch("/posts", postController.updatePosts);
