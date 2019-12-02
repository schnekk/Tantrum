const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

//model for data
const userModel = require('../models/userModel')

router.post('/login', (req,res)=>{
    const user = userModel.find({username: req.body.username,password: req.body.password})
    if(user)
    {
        jwt.sign({user},'secretkey',(err,token)=>{
            res.json({token})
        })
    }
    else
    {
        res.send("Username or password is wrong")
    }
})





module.exports = router