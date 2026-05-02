/* eslint-disable react-hooks/set-state-in-effect */
import "./NewTaskPage.css";
import DefaultButtons from "../../Buttons/Button.Component";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask } from "../../../API/taskApi";


// EMPTY FORM
const emptyForm = {
  taskname: "",
  description: "",
  category: "",
  priority: "Medium",
  status: "Pending",
  fulfillment: 0,
  reason: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
};


// MAIN COMPONENT
const NewTaskForm = ({ editTask, nextTaskId }) => {
  const [formData, setFormData] = useState(emptyForm);

  const navigate = useNavigate();
  const { id } = useParams();


  // ---------------- LOAD EDIT DATA ----------------
  useEffect(() => {
    if (!editTask) return;

    setFormData({
      taskname: editTask.taskname || "",
      description: editTask.description || "",
      category: editTask.category || "",
      priority: editTask.priority || "Medium",
      status: editTask.status || "Pending",
      fulfillment: editTask.fulfillment || 0,
      reason: editTask.reason || "",
      startDate: editTask.start_datetime?.slice(0, 10) || "",
      startTime: editTask.start_datetime?.slice(11, 16) || "",
      endDate: editTask.end_datetime?.slice(0, 10) || "",
      endTime: editTask.end_datetime?.slice(11, 16) || "",
    });

  }, [editTask]);


  //INPUT CHANGE
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // FORMAT DATE
  const formatDateTime = (date, time) => {
    if (!date || !time) return null;

    return `${date}T${time}:00`;
  };


  //SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fulfillmentValue = Number(formData.fulfillment);

   
    const isCompleted =
      fulfillmentValue >= 100 || formData.status === "Completed";

    const taskData = {
      taskname: formData.taskname,
      description: formData.description,
      category: formData.category,
      priority: formData.priority,
      status: isCompleted ? "Completed" : formData.status,
      fulfillment: isCompleted ? 100 : fulfillmentValue,
      reason: formData.reason,
      start_datetime: formatDateTime(formData.startDate, formData.startTime),
      end_datetime: formatDateTime(formData.endDate, formData.endTime),
      completed: isCompleted,
    };

    try {
      if (id) {
        await updateTask(id, taskData);
        navigate("/all-tasks");
      } else {
        await createTask(taskData);
        setFormData(emptyForm);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error saving task:", error);
    }
  };


  // CANCEL
  const handleCancel = () => {
    if (id) {
      navigate("/all-tasks");
    } else {
      setFormData(emptyForm);
    }
  };


  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit}>

        {/* HEADER */}
        <div className="header">
          <h2 className="title">{id ? "Update Task" : "Add New Task"}</h2>
          <span className="task-id">{id || nextTaskId}</span>
        </div>

        {/* NAME */}
        <label>Task Name</label>
        <input
          className="input"
          name="taskname"
          value={formData.taskname}
          onChange={handleChange}
          required
        />

        {/* DESCRIPTION */}
        <label>Description</label>
        <textarea
          className="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        {/* CATEGORY */}
        <label>Category</label>
        <input
          className="input"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        {/* PRIORITY / STATUS / FULFILLMENT */}
        <div className="row">

          <div className="col">
            <label>Priority</label>
            <select
              className="input"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="col">
            <label>Status</label>
            <select
              className="input"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Accepted</option>
              <option>Denied</option>
            </select>
          </div>

          <div className="fulfillment">
            <label>Fulfillment</label>
            <input
              className="input small"
              type="number"
              name="fulfillment"
              min="0"
              max="100"
              value={formData.fulfillment}
              onChange={handleChange}
            />
          </div>

        </div>

        {/* REASON */}
        <label>Reason</label>
        <input
          className="input"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        />

        {/* DATE TIME */}
        <div className="date-time-input">

          <fieldset className="box">
            <legend>Start</legend>

            <input
              className="input"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />

            <input
              className="input"
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="box">
            <legend>End</legend>

            <input
              className="input"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />

            <input
              className="input"
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </fieldset>

        </div>

        {/* BUTTONS */}
        <div className="center">

          <DefaultButtons
            buttonText={id ? "Update" : "Save Task"}
            className="btn save"
            type="submit"
          />

          <DefaultButtons
            buttonText="Cancel"
            className="btn cancel"
            type="button"
            onClick={handleCancel}
          />

          <DefaultButtons
            buttonText="Exit"
            className="btn exit"
            type="button"
            onClick={() => navigate("/dashboard")}
          />

        </div>

      </form>
    </div>
  );
};

export default NewTaskForm;
