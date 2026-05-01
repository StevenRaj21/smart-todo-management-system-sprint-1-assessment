import "../DashboardHomePage/DashBoardHome.Page.css";
import { useState } from "react";
import TaskTable from "../../../Tasks/TaskTable";
import { sortTasksByDateTime } from "../../../Tasks/taskSort";

const RecentTasks = ({ tasks }) => {
  const [searchText, setSearchText] = useState("");
  const activeTasks = tasks.filter((task) => !task.completed);
  const sortedActiveTasks = sortTasksByDateTime(activeTasks);

  return (
    <div className="recent-section">

      <div className="recent-header">
        <h3>Recent Tasks</h3>
      </div>

      <TaskTable
        tasks={sortedActiveTasks}
        searchText={searchText}
        setSearchText={setSearchText}
        placeholder="Search recent tasks"
        pageName="dashboard"
        showEditButton={false}
        showDeleteButton={false}
        showCompleteButton={false}
      />

    </div>
  );
};

export default RecentTasks;
