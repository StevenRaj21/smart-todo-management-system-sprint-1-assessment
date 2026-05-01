const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173"
  }),
);

// HEALTH CHECK
app.get("/health", (req, res) => {
  const currentTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  res.status(200).json({
    status: "OK",
    message: "Server is running",
    time: currentTime,
  });
});

// ROUTES
app.use("/api", taskRoutes);

module.exports = app;
