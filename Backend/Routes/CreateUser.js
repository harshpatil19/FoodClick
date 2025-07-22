const express = require('express')
const router = express.Router()
const User = require('../models/User')



//use bcrypt
const bcrypt = require("bcryptjs")



router.post("/createuser",async (req,res)=>{

    //using salt to add random element in HASH
    const salt =  await bcrypt.genSalt(10);
    //this will bcrypt password by adding some any randome elements in hash using salt for password.
    let securePassword = await bcrypt.hash(req.body.password, salt)


    try{
       await  User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            //now set password in data base as securePassword function only
            password: securePassword,
            email: req.body.email,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,

        })
        res.json({success:true});

    }catch(error){
        console.log(error)
        res.json({success:false});

    }
})
module.exports=router;