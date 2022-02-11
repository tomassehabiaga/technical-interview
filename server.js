const express = require('express');
const mongoose = require('mongoose');

const connect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

connect();

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});
const Post = mongoose.model('Post', postSchema);

const app = express();

app.use(express.json());

// los handlers deberian de tener su propio file pero por simplicidad los dejo aca
const handlerGetPosts = async (req, res) => {
  try {
    // No hay lugar para muchos tests aca
    const posts = await Post.find();

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error); 
  }
};

const handlerPostPosts = async (req, res) => {
  try {
    const {
      title,
      body,
    } = req.body;
    // En este caso estaria testearia que con la data correcta se crea un post
    // que si falta alguno de los dos deberia de fallar (o eso creo yo)
    // que devuelve el objeto creado con el status correcto
    const newPost = Post.create({
      title,
      body
    });
  
    return res.status(201).send(newPost);
  } catch (error) {
    console.log(error); 
  }
};

const handlerDeletePosts = async (req, res) => {
  try {
    const {
      params: {
        id: _id,
      },
    } = req;

    // un simple test donde se pruebe que se puede hacer delete de un post existente en la base
    
    const post = await Post.deleteOne({
      _id
    });

    return res.status(204).json(post);  
  } catch (error) {
    console.log(error); 
  }
};

const handlerGetPostsById = async (req, res) => {
  try {
    const {
      params: {
        id: _id,
      },
    } = req;

    // Un test para probar que dado un id correcto retorna el post asociado
  
    const post = await Post.find({
      _id
    });
  
    return res.status(200).json(post);
  } catch (error) {
    console.log(error); 
  }
};

const handlerUpdatePosts = async (req, res) => {
  try {
    const {
      body: {
        id: _id,
        title,
        body,
      },
    } = req;

    // Un test para probar si dada data correcta y un record existente en la base se encuentra y actualiza como deberia
  
    const newPost = await Post.updateOne({
      _id
    }, {
      $set: {
        title,
        body
      }
    });
  
    return res.json(newPost);
  } catch (error) {
    console.log(error); 
  }
};

app.get('/posts', handlerGetPosts);

app.post('/posts', handlerPostPosts);

app.delete('/posts/:id', handlerDeletePosts);

app.get('/posts/:id', handlerGetPostsById);

app.patch('/posts', handlerUpdatePosts)

PORT = 3000;
PRIVAVE_API_KEY = 'api_key';


app.listen(PORT, () => {
  console.log('Listening', PORT);
});