const express = require("express");
const router = express.Router();
const checkTitle = require("../middleware/checkTitle");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/", checkTitle, createTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
