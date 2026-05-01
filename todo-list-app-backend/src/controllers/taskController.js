const taskService = require("../services/taskService");

// CREATE TASK
const createTask = async (req, res) => {
  try {
    const taskData = req.body; // get data

    const result = await taskService.createTask(taskData); //call service

    sendSuccess(res, 201, result); // send response
  } catch (error) {
    sendError(res, "Error creating task", error);
  }
};

//  GET ALL TASKS
const getTasks = async (req, res) => {
  try {
    const result = await taskService.getAllTasks();

    sendSuccess(res, 200, result);
  } catch (error) {
    sendError(res, "Error fetching tasks", error);
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedData = req.body;

    const result = await taskService.updateTask(taskId, updatedData);

    if (!result) {
      return res.status(404).json({ message: "Task not found" });
    }

    sendSuccess(res, 200, result);
  } catch (error) {
    sendError(res, "Error updating task", error);
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const result = await taskService.deleteTask(taskId);

    if (!result) {
      return res.status(404).json({ message: "Task not found" });
    }

    sendSuccess(res, 200, { message: "Task deleted successfully" });
  } catch (error) {
    sendError(res, "Error deleting task", error);
  }
};

//  COMMON FUNCTIONS

// success response
const sendSuccess = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

// error response
const sendError = (res, message, error) => {
  res.status(500).json({
    message: message,
    error: error.message,
  });
};

// export
module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
