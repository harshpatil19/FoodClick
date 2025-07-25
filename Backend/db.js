const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/FoodClick");
    console.log("MongoDB Connected ✅");

    const db = mongoose.connection.db;

    const foodItemsCollection = db.collection("food_Items");
    const foodCategoryCollection = db.collection("food_Category");

    const foodItemsData = await foodItemsCollection.find({}).toArray();
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    global.food_Items = foodItemsData;
    global.foodCategory = foodCategoryData;

    console.log("Fetched Data from 'food_Items':\n", global.food_Items);
    console.log("Fetched Data from 'food_Category':\n", global.foodCategory);

  } catch (error) {
    console.error("MongoDB Error ❌", error);
  }
};

module.exports = mongoDB;
