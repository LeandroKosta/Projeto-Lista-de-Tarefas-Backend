const mongoose = require("mongoose");

const Conn = (url, user, pass, data) => {
  mongoose
    .connect(`${url}/${data}`,{
      user: user,
      pass: pass,
    }      
    )
    .then(() => {
      console.log("Conexão com o MongoDB executada com sucesso!");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = Conn;
