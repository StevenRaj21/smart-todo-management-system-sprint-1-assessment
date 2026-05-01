import { useState } from "react";
import DefaultButtons from "../Buttons/Button.Component";
import "./TaskTable.css";

// FORMAT DATE

const formatDateTime = (dateText) => {
  if (!dateText) return "-";

  const date = new Date(dateText);

  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

//  DAYS LEFT

const getDaysLeft = (dateText) => {
  if (!dateText) return "-";

  const endDate = new Date(dateText);
  const today = new Date();
  const diffTime = endDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (Number.isNaN(diffDays)) return "-";
  if (diffDays < 0) return "Time over";
  if (diffDays === 0) return "Today";

  return `${diffDays} day left`;
};

const TaskTable = ({
  tasks,
  searchText,
  setSearchText,
  placeholder,
  pageName,
  showEditButton = true,
  showDeleteButton = true,
  showCompleteButton = true,
  onEditTask,
  onDeleteTask,
  onCompleteTask,
}) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const hideActionsColumn = pageName === "dashboard";

  const searchValue = searchText.toLowerCase();

  // FILTER TASKS

  const filteredTasks = tasks.filter((task) => {
    return (
      task.taskname?.toLowerCase().includes(searchValue) ||
      task.description?.toLowerCase().includes(searchValue) ||
      task.category?.toLowerCase().includes(searchValue) ||
      task.priority?.toLowerCase().includes(searchValue)
    );
  });

  return (
    <>
      {/* SEARCH */}
      <div className="task-search-area">
        <input
          className="search-input"
          value={searchText}
          placeholder={placeholder}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      {/* TABLE HEADER */}

      <div className="task-table">
        <div
          className={`task-table-head ${hideActionsColumn ? "task-table-no-actions" : ""}`}
        >
          <span>S.NO</span>
          <span>TASK</span>
          <span>DESCRIPTION</span>
          <span>CATEGORY</span>
          <span>START / END</span>
          <span>PRIORITY</span>
          <span>FULFILLMENT</span>
          {!hideActionsColumn && <span>ACTIONS</span>}
        </div>

        {/* EMPTY */}

        {filteredTasks.length === 0 && (
          <p className="empty-text">No tasks available</p>
        )}

        {/* ROWS */}

        {filteredTasks.map((task, index) => (
          <div
            className={`task-table-row ${hideActionsColumn ? "task-table-no-actions" : ""}`}
            key={task.id}
            onClick={() => setSelectedTask(task)}
          >
            <span>{index + 1}</span>
            <span>{task.taskname}</span>
            <span>{task.description}</span>
            <span>{task.category}</span>
            <span className="start-end-text">
              <span>{formatDateTime(task.start_datetime)}</span>
              <span>{formatDateTime(task.end_datetime)}</span>
            </span>
            <span>{task.priority}</span>
            <span>{task.fulfillment}%</span>

            {/* ACTION BUTTONS */}

            {!hideActionsColumn && (
              <span
                className="table-btns"
                onClick={(event) => event.stopPropagation()}
              >
                {task.completed && pageName === "all" && (
                  <span className="completed-table-text">Completed</span>
                )}

                {!task.completed && showEditButton && (
                  <DefaultButtons
                    buttonText="Edit"
                    className="edit-table-btn"
                    onClick={() => onEditTask(task)}
                    useDefaultClass={false}
                  />
                )}

                {showDeleteButton &&
                  (!task.completed || pageName === "completed") && (
                    <DefaultButtons
                      buttonText="Delete"
                      className="delete-table-btn"
                      onClick={() => onDeleteTask(task.id)}
                      useDefaultClass={false}
                    />
                  )}

                {!task.completed && showCompleteButton && (
                  <DefaultButtons
                    buttonText="Completed"
                    className="complete-table-btn"
                    onClick={() => onCompleteTask(task)}
                    useDefaultClass={false}
                  />
                )}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* POPUP */}

      {selectedTask && (
        <div className="task-popup-bg">
          <div className="task-popup">
            <h2>{selectedTask.taskname}</h2>
            <p>
              <b>Task ID:</b> {selectedTask.id}
            </p>
            <p>
              <b>Description:</b> {selectedTask.description}
            </p>
            <p>
              <b>Category:</b> {selectedTask.category}
            </p>
            <p>
              <b>Priority:</b> {selectedTask.priority}
            </p>
            <p>
              <b>Status:</b> {selectedTask.status}
            </p>
            <p>
              <b>Fulfillment:</b> {selectedTask.fulfillment}%
            </p>
            <p>
              <b>Start:</b> {formatDateTime(selectedTask.start_datetime)}
            </p>
            <p>
              <b>End:</b> {formatDateTime(selectedTask.end_datetime)}
            </p>
            <p>
              <b>Time Left:</b> {getDaysLeft(selectedTask.end_datetime)}
            </p>
            <p>
              <b>Reason:</b> {selectedTask.reason || "-"}
            </p>

            <DefaultButtons
              buttonText="Exit"
              className="popup-exit-btn"
              onClick={() => setSelectedTask(null)}
              useDefaultClass={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TaskTable;
