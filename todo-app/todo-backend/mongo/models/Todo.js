const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
