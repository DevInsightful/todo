const express = require("express");
const router = express.Router();
const { addTodo, getAll, getById } = require("../controllers/todoController");
// add a new todo
router.post("/", addTodo);
// get all todos
router.get("/", getAll);
// get specific todo
router.get("/:id", getById);
module.exports = router;


// 66f3f495806ce20aa21814d8