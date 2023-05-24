const mongoose = require("mongoose");

const TaskSchema = new mongoose.schema({
  title: String,
});

module.exports = mongoose.model("tasks", TaskSchema);
 