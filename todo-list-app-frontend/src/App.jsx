import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import HomePage from "./components/Pages/HomePage/Home.Page";
import DashBoardHomePage from "./components/Pages/DashBoardPage/DashboardHomePage/DashBordHome.Page";
import Layout from "./components/Layout/Layout";
import SettingsPage from "./components/Settings/SettingsPage/Settings.Page";
import CompletedPage from "./components/Pages/Completed/CompletedPage";
import PriorityPage from "./components/Pages/Priority/PriorityPage";
import PendingPage from "./components/Pages/Pending/PendingPage";
import AllTasksPage from "./components/Pages/AllTasks/AllTasksPage";
import NewTaskPage from "./components/Pages/AddTask/NewTaskPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<Layout />}>

          <Route path="/dashboard" element={<DashBoardHomePage />} />

          <Route path="/all-tasks" element={<AllTasksPage />} />

          <Route path="/add-task" element={<NewTaskPage />} />

          <Route path="/edit-task/:id" element={<NewTaskPage />} />

          <Route path="/pending" element={<PendingPage />} />

          <Route path="/priority/:level" element={<PriorityPage />} />

          <Route path="/completed" element={<CompletedPage />} />

          <Route path="/settings" element={<SettingsPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
