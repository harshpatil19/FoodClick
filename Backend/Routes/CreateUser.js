const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async (req,res)=>{
    try{
       await  User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
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