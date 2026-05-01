import "./NewTaskPage.css";
import "../../Card/UniversalCardLayout.css";
import NewTaskForm from "./NewTaskForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasks } from "../../../API/taskApi";

const NewTaskPage = () => {
  const { id } = useParams();
  const [editTask, setEditTask] = useState(null);
  const [nextTaskId, setNextTaskId] = useState("TASK-001");

  useEffect(() => {
    const loadEditTask = async () => {
      const data = await getTasks();
      const tasks = Array.isArray(data) ? data : [];

      // This shows the next task number before save.
      const taskNumbers = tasks.map((task) => {
        return Number(task.id?.split("-")[1] || 0);
      });
      const maxNumber = Math.max(0, ...taskNumbers);
      const nextNumber = String(maxNumber + 1).padStart(3, "0");
      setNextTaskId(`TASK-${nextNumber}`);

      if (!id) return;

      const selectedTask = data.find((task) => task.id === id);
      setEditTask(selectedTask);
    };

    loadEditTask();
  }, [id]);

  return (
    <section className="dashboard-content">
      <div>
        <p className="dashboard-focus-text">DAILY FOCUS</p>
        <NewTaskForm editTask={editTask} nextTaskId={nextTaskId} />
      </div>
    </section>
  );
};

export default NewTaskPage;
