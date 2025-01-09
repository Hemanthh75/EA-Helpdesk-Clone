const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env

//Get the mongodb connection string from .env
const uri = process.env.MONGO_URL;

//Create a mongoclient instance
const client = new MongoClient(uri);

//function to connect mongodb
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB atlas");
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the application if connection fails
  }
}

module.exports = connectToDatabase;
