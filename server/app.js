const express = require("express");
const app = express();
const PORT = 3001;
const connectToDatabase = require("./config/database");

async function startApp() {
  const client = await connectToDatabase(); //Connect to database

  const databases = await client.db().admin().listDatabases();
  console.log("Databases", databases.databases);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

startApp();
app.listen(PORT, () => {
  console.log(`Server is up and running in port ${PORT}`);
});
