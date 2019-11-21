const express = require('express')
const router = express.Router()

// model for data
const tagModel = require('./models/tagModel')

//show all tags
router.get('/tag',async (req,res)=>{
  const tag = await tagModel.find({})
  try{
    res.send(tag)
  }catch(err){
    res.status(500).send(err)
  }
})

// add tag
router.post('/tag',async (req,res)=>{
    const tag = new tagModel(req.body)
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
    }
    res.status(200).send()
  }catch(err){
    res.status(500).send(err)
  }
})

// update tag
router.patch('/tag/:id',async (req,res)=>{
  try{
    const tag = await tagModel.findByIdAndUpdate(req.params.id,req.body)
    await tag.save()
    res.send(tag)
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router
