const pool = require("./dbConfig");

const connectDB = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
};

module.exports = connectDB;