/* Es comun que el index.js se encargue de inicializar la conexión con Mongo y levantar la Api. Por esta razón quité de server.js esa parte */
const mongoose = require("mongoose");

const app = require("./app");

const connect = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI); //Tanto la URI de Mongo y el PORT son variables que pueden cambiar facilmente, por esta razón es bueno tenerlo en un archivo de variables de entorno, porque si cambia es en un solo lugar.
};

connect();

app.listen(process.env.PORT, () => {
  console.log("Listening", process.env.PORT);
});
