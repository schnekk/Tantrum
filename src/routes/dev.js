const express = require('express')
const router = express.Router()

// model for data
const devModel = require('../models/devModel')

//show all devs //
router.get('/developer',async (req,res)=>{
  const dev = await devModel.find({})
  try{
    res.send(dev)
  }catch(err){
    res.status(500).send(err)
  }
})

// add a new dev //
router.post('/developer',async (req,res)=>{
    const dev = await new devModel(req.body)
    try{
      await dev.save()
      res.send(dev)
    }catch(err){
      res.status(500).send(err)
    }
  })

// delete dev //
router.delete('/developer/:id',async (req,res)=>{
  try{
    const {id} = req.params
    const dev = await devModel.findById(id)
    if(!dev){
      res.status(404).send("No item found")
    }else{
      await dev.remove({_id: dev._id})
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})

// update dev //
router.patch('/developer/:id',async (req,res)=>{
  try{
    const dev = await devModel.findByIdAndUpdate(req.params.id,req.body)
    if(!dev){
      res.status(404).send("No item found")
    }else{
      await dev.save()
      res.status(200).send(dev)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router
