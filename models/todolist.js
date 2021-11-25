const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
});

const TodoList = mongoose.model("TodoList", taskModel);

module.exports = TodoList;
