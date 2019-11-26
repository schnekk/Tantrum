const express = require('express')
const router = express.Router()

// model for data
const tagModel = require('../models/tagModel')

//show all tags
router.get('/tag',async (req,res)=>{
  const tag = await tagModel.find()
  try{
    res.send(tag)
  }catch(err){
    res.status(500).send(err)
  }
})

// add a new tag
router.post('/tag',async (req,res)=>{
    const tag = await new tagModel({
      name: req.body.name,
      description: req.body.description,
      game: []
    })
    try{  
      await tag.save()
      res.send(tag)
    }catch(err){
      res.status(500).send(err)
    }
  })

// delete tag
router.delete('/tag/:id',async (req,res)=>{
  try{
    const tag = await tagModel.findByIdAndDelete(req.params.id)
    if(!tag){
      res.status(404).send("No item found")
    }else{
      res.status(200).send(tag)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

// update tag *** may have bug ***
router.patch('/tag/:id',async (req,res)=>{
  try{
    const tag = await tagModel.findByIdAndUpdate(req.params.id,req.body)
    if(!tag){
      res.status(404).send("No item found")
    }else{
      await tag.save()
      res.status(200).send(tag)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router
