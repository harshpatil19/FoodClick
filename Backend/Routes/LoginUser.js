// backend/routes/LoginRoute.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ success: false, error: "Email not registered" });
    }

    if (userData.password !== password) {
      return res.status(400).json({ success: false, error: "Incorrect Password" });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
