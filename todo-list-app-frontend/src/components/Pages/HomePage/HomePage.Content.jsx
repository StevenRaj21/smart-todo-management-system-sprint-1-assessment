import "./Home.Page.css";
import "../../Buttons/Button.Component.css";
import Navigator from "../../Navigator/Navigator";

const HomePageContent = () => {
  return (
    <div className="home-page-bg">
      <div className="home-card-container">
        <div className="home-card">
          <p className="title">Todo List</p>
          <h1>Stay Organized, Stay Productive</h1>

          <p>
            Manage your tasks, track progress, and stay focused — all in one
            place.
          </p>

          <ul className="features">
            <li>Plan your daily and weekly tasks</li>
            <li>Track productivity and build habits</li>
            <li>Organize with priorities and filters</li>
          </ul>

          <div className="home-btn-flex">
            <Navigator
              toEndPoint="dashboard"
              label="Get Started"
              buttonClass="home-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
