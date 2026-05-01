import { useContext } from "react";
import "./Settings.Page.css";
import DefaultButtons from "../../Buttons/Button.Component";
import { ThemeContext } from "../../../context/themeContext.jsx";

const SettingsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="settings-page">
      <p className="dashboard-focus-text">PREFERENCES</p>
      <h1 className="welcome-text">Settings</h1>

      <div className="settings-box">
        <div>
          <h2>Colour Scheme</h2>
          <p>Choose the appearance that feels best for your workspace.</p>
        </div>

        <DefaultButtons
          buttonText={theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          onClick={toggleTheme}
          className="theme-toggle-btn"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
