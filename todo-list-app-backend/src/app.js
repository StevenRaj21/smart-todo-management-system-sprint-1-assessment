const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");
const pool = require("./config/dbConfig"); // 👈 important

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// ✅ HEALTH + DB CHECK
app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      status: "OK",
      message: "Server + Database connected",
      time: new Date(),
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: "Database connection failed",
      error: error.message,
    });
  }
});

app.use("/api", taskRoutes);

module.exports = app;