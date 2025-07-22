// backend/routes/LoginRoute.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

//use bcrypt
const bcrypt = require("bcryptjs")


//use JWT
const jwt = require ("jsonwebtoken")

//create jwtSecret any random string fpr signature of token
const jwtSecret = "MyNameisEndToEndYouTubeChannel$#"

router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ success: false, error: "Email not registered" });
    }

    //we have included jwt so we will compare our password with userData.password
    const pwdCompare = await bcrypt.compare(password,userData.password)

  // and if it is not as compared then it will give error 400
    if (!pwdCompare) {
      return res.status(400).json({ success: false, error: "Incorrect Password" });
    }

    //here we will be creating SIGNATURE for token.
    //1.HEADER
    const data={
      user:{
        id:userData.id
      }

    }
    // 2. Payload (data) and Signature (jwtSecret)
    const authToken = jwt.sign(data,jwtSecret)

    //Now we will returning success and Token with it
    return res.json({ success: true, authToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
