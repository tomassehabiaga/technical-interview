/* Importante tener un archivo para definir las rutas a las que la api respondera. Uno por cada recurso */

const express = require("express");

const postController = require("./controllers/post.controller");

const router = express.Router();

router.router.get("/", postController.getPosts);

router.post("/", postController.createPost);

router.delete("/:id", postController.deletePost);

router.get("/:id", postController.getPostById);

router.patch("/", postController.updatePosts);

module.exports = api;
