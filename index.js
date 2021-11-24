const express = require("express");
//const cors = require('cors');
const TodoListRouter = require("./routes/todolist.routes");
const Conn = require("./conn/conn");
const app = express();
const port = 3001;

app.use(express.json());
//app.use(cors());

app.use("/todolist", TodoListRouter);

Conn();

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
