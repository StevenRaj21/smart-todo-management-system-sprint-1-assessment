const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// ROUTES

// create task
router.post("/tasks", taskController.createTask);

// get all tasks
router.get("/tasks", taskController.getTasks);

// update task
router.put("/tasks/:id", taskController.updateTask);

// delete task
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
