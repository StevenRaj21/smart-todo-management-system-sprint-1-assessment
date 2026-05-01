import "./PendingPage.css"
import TaskListPage from "../../Tasks/TaskListPage";

const PendingPage = () => {
    return(
        <TaskListPage title="Pending Tasks" filterType="pending" pageName="pending" />
    )
}

export default PendingPage
