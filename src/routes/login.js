const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

//model for data
const userModel = require('../models/userModel')

router.post('/login', async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const user = await userModel.findOne({username,password})
    if(!user)
    {
        res.send("Username or password is wrong")
    }
    else
    {
        jwt.sign({user},'secretkey',(err,token)=>{
            res.json({token})
        })
    }
})

module.exports = router