import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Clock from "../Clock/Clock";
import CardLayout from "../Card/CardLayout";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="app-layout-content">

        {/* Header (Clock) */}
        <div className="dashboard-header">
          <Clock />
        </div>

        {/* Page Content */}
        <CardLayout>
          <Outlet />
        </CardLayout>

      </main>
    </div>
  );
};

export default Layout;