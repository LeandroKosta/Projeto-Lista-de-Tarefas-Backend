const express = require("express");

const TodoListController = require("./../controllers/todolist.controller");

const todolistController = new TodoListController();

const router = express.Router();

router.get("/", todolistController.getTodoList);

router.get("/:id", todolistController.getTodoListById);

router.post("/add", todolistController.createTodoList);

router.put("/:id", todolistController.editTodoList);

router.delete("/:id", todolistController.deleteTodoList);

module.exports = router;
