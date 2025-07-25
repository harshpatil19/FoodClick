const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    console.log("Food Items:", global.food_Items);
    console.log("Food Categories:", global.foodCategory);

    res.send([global.food_Items, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
