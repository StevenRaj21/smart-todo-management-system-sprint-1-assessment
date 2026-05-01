import { NavLink } from "react-router-dom";

const SidebarItem = ({ toEndPoint, label }) => {
  return (
    <NavLink
      to={toEndPoint}
      className={({ isActive }) =>
        `nav-item ${isActive ? "active" : ""}`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarItem;