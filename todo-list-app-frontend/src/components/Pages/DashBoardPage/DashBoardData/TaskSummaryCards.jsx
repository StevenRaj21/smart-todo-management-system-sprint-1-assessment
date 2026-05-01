import "../DashboardHomePage/DashBoardHome.Page.css"

const TaskSummaryCards = ({ tasks }) => {
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="card-row">

      <Card title="All Tasks" count={tasks.length} />
      <Card title="Pending" count={activeTasks.length} />
      <Card title="High" count={activeTasks.filter((task) => task.priority === "High").length} />
      <Card title="Medium" count={activeTasks.filter((task) => task.priority === "Medium").length} />
      <Card title="Low" count={activeTasks.filter((task) => task.priority === "Low").length} />
      <Card title="Completed" count={completedTasks.length} />

    </div>
  );
};

const Card = ({ title, count }) => (
  <div className="summary-card">
    <h4>{title}</h4>
    <p className="DB-title-task-no">Task No</p>
    <span>{count}</span>
  </div>
);

export default TaskSummaryCards;
