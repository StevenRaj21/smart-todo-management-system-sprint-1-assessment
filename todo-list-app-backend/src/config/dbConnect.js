const client = require("./dbConfig");

// Function to connect database
const connectDB = async () => {
  try {
    await client.connect(); // connect to DB
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
};


module.exports = connectDB;