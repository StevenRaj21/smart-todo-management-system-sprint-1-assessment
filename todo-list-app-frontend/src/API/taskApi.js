const RENDER_API_URL =
  "https://smart-todo-management-system-sprint-1.onrender.com/api";

const ENV_API_URL = import.meta.env.VITE_API_URL;

const BASE_URL =
  ENV_API_URL && ENV_API_URL.includes("/api") ? ENV_API_URL : RENDER_API_URL;

const handleResponse = async (response, message) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.error || message);
  }

  return await response.json();
};

// GET TASKS
export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return await handleResponse(response, "Failed to fetch tasks");
};

// CREATE TASK
export const createTask = async (taskData) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });

  return await handleResponse(response, "Failed to create task");
};

// UPDATE TASK
export const updateTask = async (id, taskData) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });

  return await handleResponse(response, "Failed to update task");
};

// DELETE TASK
export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });

  return await handleResponse(response, "Failed to delete task");
};
