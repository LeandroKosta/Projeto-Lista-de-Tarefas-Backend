const TodoListModel = require("./../models/todolist");

class todolistService {
  findAll = async () => await TodoListModel.find();

  findById = async (id) => {
    return await TodoListModel.findById(id);
  };

  create = async (todolist) => {
    return await TodoListModel.create(todolist);
  };

  edit = async (id, todolist) => {
    return await TodoListModel.updateOne({ _id: id }, todolist);
  };

  delete = async (id) => {
    return await TodoListModel.deleteOne({ _id: id });
  };
}

module.exports = todolistService;
