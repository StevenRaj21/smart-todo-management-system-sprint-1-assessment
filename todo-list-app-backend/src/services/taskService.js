// import DB client
const client = require("../config/dbConfig");

// APPLY RULES

const applyTaskRules = (task) => {
  const value = Number(task.fulfillment || 0);

  task.fulfillment = value;

  if (value >= 100 || task.status === "Completed") {
    task.fulfillment = 100;
    task.status = "Completed";
    task.completed = true;
  } else {
    task.completed = false;
  }

  return task;
};

// GENERATE ID

const getLastTask = async () => {
  const query = "SELECT id FROM tasks ORDER BY id DESC LIMIT 1";
  const result = await client.query(query);
  return result.rows;
};

const createNextId = (lastId) => {
  if (!lastId) return "TASK-001";

  const number = parseInt(lastId.split("-")[1]) + 1;

  return "TASK-" + String(number).padStart(3, "0");
};

const generateTaskId = async () => {
  const rows = await getLastTask();

  if (rows.length === 0) {
    return "TASK-001";
  }

  return createNextId(rows[0].id);
};

// CREATE TASK

const buildCreateValues = (id, task) => {
  return [
    id,
    task.taskname || null,
    task.description || null,
    task.category || null,
    task.priority || "Medium",
    task.status || "Pending",
    task.fulfillment || 0,
    task.reason || null,
    task.start_datetime || null,
    task.end_datetime || null,
    task.completed || false,
  ];
};

const createTask = async (taskData) => {
  const task = applyTaskRules(taskData);

  const id = await generateTaskId();

  const query = `
    INSERT INTO tasks 
    (id, taskname, description, category, priority, status, fulfillment, reason, start_datetime, end_datetime, completed) 
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    RETURNING *;
  `;

  const values = buildCreateValues(id, task);

  const result = await client.query(query, values);

  return result.rows[0];
};

// GET TASKS

const getAllTasks = async () => {
  const query = "SELECT * FROM tasks ORDER BY created_at DESC";

  const result = await client.query(query);

  return result.rows;
};

// UPDATE TASK

const buildUpdateValues = (task, id) => {
  return [
    task.taskname,
    task.description,
    task.category,
    task.priority,
    task.status,
    task.fulfillment,
    task.reason,
    task.start_datetime,
    task.end_datetime,
    task.completed,
    id,
  ];
};

const updateTask = async (id, taskData) => {
  const task = applyTaskRules(taskData);

  const query = `
    UPDATE tasks SET
      taskname = $1,
      description = $2,
      category = $3,
      priority = $4,
      status = $5,
      fulfillment = $6,
      reason = $7,
      start_datetime = $8,
      end_datetime = $9,
      completed = $10
    WHERE id = $11
    RETURNING *;
  `;

  const values = buildUpdateValues(task, id);

  const result = await client.query(query, values);

  return result.rows[0];
};

// DELETE TASK

const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = $1 RETURNING *";

  const result = await client.query(query, [id]);

  return result.rows[0];
};



module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
