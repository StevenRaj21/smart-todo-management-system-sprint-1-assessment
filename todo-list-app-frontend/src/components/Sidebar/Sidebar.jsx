import "./Sidebar.css";
import Navigator from "../Navigator/Navigator";
import { useState } from "react";
import SidebarItem from "../Navigator/SidebarItem";

const Sidebar = () => {
  const [showPriority, setShowPriority] = useState(false);

  const priorityDropdown = () => {
    setShowPriority(!showPriority);
  };
  return (
    <div className="sidebar">
      <Navigator
        toEndPoint={"/"}
        label={"Back to Home"}
        buttonClass={"sidebar-home-btn"}
      />
      <ul>
        <li>
          <SidebarItem toEndPoint="/dashboard" label="Dashboard" />
        </li>

        <li>
          <SidebarItem toEndPoint="/all-tasks" label="All Tasks" />
        </li>

        <li>
          <SidebarItem toEndPoint="/add-task" label="Add Task" />
        </li>

        <li>
          <SidebarItem toEndPoint="/pending" label="Pending" />
        </li>

        <li
          onClick={priorityDropdown}
          className={`dropdown ${showPriority ? "active" : ""}`}
        >
          {/* <SidebarItem toEndPoint="/prioritytasks" label="Priority Tasks" /> */}
          Priority Tasks
        </li>

        {showPriority && (
          <ul className="dropdown-menu">
            <li>
              <SidebarItem toEndPoint="/priority/high" label="High" />
            </li>
            <li>
              <SidebarItem toEndPoint="/priority/medium" label="Medium" />
            </li>
            <li>
              <SidebarItem toEndPoint="/priority/low" label="Low" />
            </li>
          </ul>
        )}
        <li>
          <SidebarItem toEndPoint="/completed" label="Completed" />
        </li>
        <li>
          <SidebarItem toEndPoint="/settings" label="Settings" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
