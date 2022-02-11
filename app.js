/* app.js por lo general es quien crea el servidor web y configura express */

const express = require("express");

const app = express();

const postsRouter = require("./posts"); //Separa los routes de la definición de la app. Si cambia uno es solo un archivo a modificar, además de que si tengo muchos recursos se hace imposible leer el código.

app.use("/posts", postsRouter);

module.exports = app;
