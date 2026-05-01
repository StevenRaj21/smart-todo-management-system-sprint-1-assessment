import { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  // state to store current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // update time every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // cleanup
    return () => {
      clearInterval(timer);
    };
  }, []);

  // format date
  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  // format time
  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="dashboard-headbar">
      <div className="date-left">{date}</div>

      <h1 className="dashboardHomePage-h">Todo List</h1>

      <div className="time-right">{time}</div>
    </div>
  );
};

export default Clock;
