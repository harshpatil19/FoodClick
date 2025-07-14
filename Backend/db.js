const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/FoodClick");


    console.log("MongoDB Connected ✅");

    const db = mongoose.connection.db;
    const collection = db.collection("Foods");

    const data = await collection.find({}).toArray();
    console.log("Fetched Data from 'Foods':\n", data);

  } catch (error) {
    console.error("MongoDB Error ❌", error);
  }
};

module.exports = mongoDB;
