const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    state: { type: Boolean, required: true },
    task: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("todoModel", todoSchema);
