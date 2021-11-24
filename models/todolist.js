const mongoose = require("mongoose");

const assignmentModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
});

const TodoList = mongoose.model("TodoList", assignmentModel);

module.exports = TodoList;
