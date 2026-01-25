const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis");

router.get("/", async (req, res) => {
  const totalTodos = parseInt(await getAsync("added_todos")) || 0;

  res.json({
    totalTodos,
  });
});

module.exports = router;
