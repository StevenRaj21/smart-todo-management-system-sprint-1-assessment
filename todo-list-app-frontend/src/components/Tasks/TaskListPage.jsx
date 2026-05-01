/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTask, getTasks, updateTask } from "../../API/taskApi";
import TaskTable from "./TaskTable";
import { sortTasksByDateTime } from "./taskSort";

const TaskListPage = ({
  title,
  filterType = "all",
  priorityLevel = "",
  pageName = "",
  showEditButton = true,
  showDeleteButton = true,
  showCompleteButton = true,
}) => {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const pageTasks = tasks.filter((task) => {
    if (filterType === "pending") return !task.completed;
    if (filterType === "completed") return task.completed;
    if (filterType === "priority") {
      return !task.completed && task.priority?.toLowerCase() === priorityLevel;
    }

    return true;
  });

  const sortedTasks = sortTasksByDateTime(pageTasks);

  const handleEditTask = (task) => {
    navigate(`/edit-task/${task.id}`);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleCompleteTask = async (task) => {
    await updateTask(task.id, {
      ...task,
      status: "Completed",
      fulfillment: 100,
      completed: true,
    });

    loadTasks();
  };

  return (
    <section className="dashboard-content">
      <div>
        <p className="dashboard-focus-text">DAILY FOCUS</p>
        <h1 className="welcome-text">{title}</h1>
      </div>

      <TaskTable
        tasks={sortedTasks}
        searchText={searchText}
        setSearchText={setSearchText}
        placeholder={`Search ${title}`}
        pageName={pageName}
        showEditButton={showEditButton}
        showDeleteButton={showDeleteButton}
        showCompleteButton={showCompleteButton}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
    </section>
  );
};

export default TaskListPage;
