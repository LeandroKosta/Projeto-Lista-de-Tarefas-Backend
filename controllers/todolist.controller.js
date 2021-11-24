const TodoListService = require("./../services/todolist.service");

const todolistService = new TodoListService();

class todolistController {
  getTodoList = async (req, res) => {
    const todolist = await todolistService.findAll();

    res.send(todolist);
  };

  getTodoListById = async (req, res) => {
    const todolist = await todolistService.findById(req.params.id);
    res.sen(todolist);
  };

  createTodoList = async (req, res) => {
    if (!req.body) {
      return;
    }
    await todolistService
      .create(req.body)
      .then(() => {
        res.send({
          message: `Tarefa foi adicionada com sucesso!`,
        });
      })
      .catch((err) => {
        res.status(500).send({ message: `Erro no Servidor` });
      });
  };

  editTodoList = async (req, res) => {
    const idParam = req.params.id;
    const todolistEdit = req.body;

    await todolistService
      .edit(idParam, todolistEdit)
      .then(() => {
        res.send({ message: `Tarefa Editada com Sucesso!` });
      })
      .catch((err) => {
        res.status(500).send({ message: `Erro ${err}` });
      });
  };

  deleteTodoList = async (req, res) => {
    const idParam = req.params.id;
    await todolistService
      .delete(idParam)
      .then(() => {
        res.send({ message: "Tarefa excluida com sucesso!" });
      })
      .catch((err) => {
        res.status(500).send({ message: `Error: ${err}` });
      });
  };
}

module.exports = todolistController;
