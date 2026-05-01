const client = require("../config/dbConfig");

// test function
const testQuery = async () => {
  try {
    const result = await client.query("SELECT * FROM tasks");

    console.log("Tasks data:");
    console.log(result.rows);

  } catch (error) {
    console.log("Error while fetching data:", error.message);
  }
};

// call function
testQuery();