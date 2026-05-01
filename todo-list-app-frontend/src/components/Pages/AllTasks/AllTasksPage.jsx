import "./AllTasksPage.css";
import "../../Card/UniversalCardLayout.css"
import TaskListPage from "../../Tasks/TaskListPage";

const AllTasksPage = () => {
  return (
    <TaskListPage title="All Tasks" pageName="all" />
  );
};

export default AllTasksPage;
