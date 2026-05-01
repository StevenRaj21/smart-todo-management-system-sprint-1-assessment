import "./CompletedPage.css"
import TaskListPage from "../../Tasks/TaskListPage";

const CompletedPage = () => {
    return(
        <TaskListPage
          title="Completed Tasks"
          filterType="completed"
          pageName="completed"
          showEditButton={false}
          showCompleteButton={false}
        />
    )
}

export default CompletedPage
