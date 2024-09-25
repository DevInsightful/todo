const todoModel = require("../models/todoModel.js");

const addTodo = async (req, res) => {
  //   const { task, state } = req.body;
  try {
    const todo = await todoModel.create({ ...req.body });
    res.status(200).json(todo);
    console.log(todo);
  } catch (err) {
    res.status(400).json({ "Error: ": err.message });
    console.log(err.message);
  }
};

// for getting all the todos
const getAll = async (req, res) => {
  try {
    const todos = await todoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({ todos });
  } catch (err) {
    res.status(400).json({ "error: ": err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.find({ _id: id });
    res.status(200).json({ todo });
  } catch (err) {
    res.status(404).json({ "error: ": err.message });
  }
};

// update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findByIdAndUpdate({ _id: id },{...req.body});
    res.status(200).json({ todo });
  } catch (err) {
    res.status(404).json({ "error: ": err.message });
  }
};

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findByIdAndDelete(
      { _id: id }
    );
    res.status(200).json({ todo });
  } catch (err) {
    res.status(404).json({ "error: ": err.message });
  }
};

module.exports = { addTodo, getAll, getById,updateTodo,deleteTodo };
