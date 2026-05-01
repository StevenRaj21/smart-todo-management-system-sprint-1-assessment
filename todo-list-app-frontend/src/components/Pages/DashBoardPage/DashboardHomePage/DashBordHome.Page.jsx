import { useEffect, useState } from "react";
import { getTasks } from "../../../../API/taskApi";
import DashBoardHomePageDetails from "../DashBoardHomePageDetails/DashBoardHome.PageDetails";
import TaskSummaryCards from "../DashBoardData/TaskSummaryCards";
import RecentTasks from "../DashBoardData/RecentTasks";
import "./DashBoardHome.Page.css";


const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    };

    loadTasks();
  }, []);

  return (
    <section className="dashboard-content">

      {/* Welcome Section */}
      <DashBoardHomePageDetails />

      {/* Cards Section */}
      <TaskSummaryCards tasks={tasks} />

      {/* Recent Tasks Section */}
      <RecentTasks tasks={tasks} />

    </section>
  );
};

export default DashboardPage;
