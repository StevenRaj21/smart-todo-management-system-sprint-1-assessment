// STEP 1: Load env variables FIRST
require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/dbConnect");

// STEP 2: Connect Database
connectDB();

// STEP 3: Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("ENV:", process.env.DATABASE_URL);