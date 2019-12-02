const express = require('express')
const router = express.Router()

// model for data
const tagModel = require('../models/tagModel')

//show all tags //
router.get('/tag',async (req,res)=>{
  const tag = await tagModel.find().sort({name:1})
  try{
    res.send(tag)
  }catch(err){
    res.status(500).send(err)
  }
})

// add a new tag //
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

// delete tag //
router.delete('/tag/:id',async (req,res)=>{
  try{
    const {id} = req.params
    const tag = await tagModel.findById(id)
    if(!tag){
      res.status(404).send("No item found")
    }else{
      await tag.remove({_id: tag._id})
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})

// update tag //
router.patch('/tag/:id',async (req,res)=>{
  try{
    const tag = await tagModel.findByIdAndUpdate(req.params.id,req.body)
    if(!tag){
      res.status(404).send("No item found")
    }else{
      await tag.save()
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router
