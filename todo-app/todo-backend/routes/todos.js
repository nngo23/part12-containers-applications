const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const { getAsync, setAsync } = require("../redis");

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const newTodo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  res.status(201).json(newTodo);
  const currentCount = parseInt(await getAsync("added_todos")) || 0;
  await setAsync("added_todos", currentCount + 1);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.json(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  if ("done" in req.body) req.todo.done = req.body.done;
  if ("text" in req.body) req.todo.text = req.body.text;
  await req.todo.save();
  res.json(req.todo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
