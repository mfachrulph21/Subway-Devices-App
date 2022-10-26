const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://alulmuhammad:alul@jakarta.zwiujj7.mongodb.net/test"

const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    console.log("connected to mongo db");
    const dbConnection = client.db("subwhyDB");
    db = dbConnection;
    return dbConnection;
  } catch (error) {
    if (error.name === "BSONTypeError") {
      res.status(404).json({ message: "Data not found" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

function getDB() {
  return db;
}

module.exports = { connect, getDB };