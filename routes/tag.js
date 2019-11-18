const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const tagModel = require('./models/tagModel')

router.post('/tag/add',function(req, res,next){
    const tag = new tagModel(req.body)
    tag.save().then(function(tag){
        res.send(tag)
    }).catch(next)
  })

module.exports = router