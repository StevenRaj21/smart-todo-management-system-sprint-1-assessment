// This helper keeps task serial numbers in date and time order.
export const getTaskDateValue = (task) => {
  const taskDate =
    task.end_datetime ||
    task.start_datetime ||
    task.created_at;

  return new Date(taskDate).getTime() || 0;
};

export const sortTasksByDateTime = (tasks) => {
  return [...tasks].sort((firstTask, secondTask) => {
    return getTaskDateValue(secondTask) - getTaskDateValue(firstTask);
  });
};
