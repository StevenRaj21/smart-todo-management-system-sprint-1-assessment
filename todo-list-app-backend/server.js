const app = require("./src/app");
const connectDB = require("./src/config/dbConnect");

// connect database
connectDB();

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});