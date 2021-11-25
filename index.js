if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
//const cors = require('cors');
const TodoListRouter = require("./routes/todolist.routes");
const Conn = require("./conn/conn");
const app = express();

app.use(express.json());
//app.use(cors());

app.use("/todolist", TodoListRouter);

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_user, db_pass, db_data);

const port = 3001;
app.listen(process.env.PORT || port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
