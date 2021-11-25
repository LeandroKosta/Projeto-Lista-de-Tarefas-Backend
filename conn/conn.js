const mongoose = require("mongoose");

const Conn = (user, pass, data) => {
  mongoose
    .connect(
      `mongodb://${user}:${pass}@projetolistadetarefa-shard-00-00.p1ovi.mongodb.net:27017,projetolistadetarefa-shard-00-01.p1ovi.mongodb.net:27017,projetolistadetarefa-shard-00-02.p1ovi.mongodb.net:27017/${data}?ssl=true&replicaSet=atlas-y60afp-shard-0&authSource=admin&retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Conexão com o MongoDB executada com sucesso!");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = Conn;
