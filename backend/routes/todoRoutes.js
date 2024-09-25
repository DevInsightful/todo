const express = require("express");
const router = express.Router();
const {
  addTodo,
  getAll,
  getById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
// add a new todo
router.post("/", addTodo);
// get all todos
router.get("/", getAll);
// get specific todo
router.get("/:id", getById);
// update todo
router.patch("/:id", updateTodo);
// delete todo
router.delete("/:id", deleteTodo);
module.exports = router;

