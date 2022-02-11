const mongoose = require("mongoose");

//cambio el nombre porque los nombres de los schemas van en mayuscula.
const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model("Post", PostSchema);
