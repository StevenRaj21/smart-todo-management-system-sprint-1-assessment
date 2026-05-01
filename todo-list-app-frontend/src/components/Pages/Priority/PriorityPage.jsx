import "./PriorityPage.css";
import { useParams } from "react-router-dom";
import TaskListPage from "../../Tasks/TaskListPage";

const PriorityPage = () => {
  // get priority level from URL
  const params = useParams();
  const level = params.level;

  // create title text
  let title = "";

  if (level) {
    const firstLetter = level.charAt(0).toUpperCase();
    const remaining = level.slice(1);

    title = firstLetter + remaining + " Priority Tasks";
  }

  return (
    <TaskListPage
      title={title}
      filterType="priority"
      priorityLevel={level}
      pageName="priority"
    />
  );
};

export default PriorityPage;
