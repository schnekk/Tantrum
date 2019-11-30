const express = require('express')
const router = express.Router()

// model for data
const userModel = require('../models/userModel')

//show all users
router.get('/user',async (req,res)=>{
    const user = await userModel.find()
    try{
      res.send(user)
    }catch(err){
      res.status(500).send(err)
    }
  })

  // add a user
router.post('/user',async (req,res)=>{
    try{
      const user = await new userModel({
        avatar: req.body.avatar,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        follower: [],
        favGame: []
      })
      await user.save()
      res.send(user)
      res.send(req.body)
    }catch(err){
      res.status(500).send(err)
    }
  })

// delete user //
router.delete('/user/:id',async (req,res)=>{
  try{
    const {id} = req.params
    const user = await userModel.findById(id)
    if(!user){
      res.status(404).send("No item found")
    }else{
      await user.remove({_id:user._id})
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})

  // update user
router.patch('/user/:id',async (req,res)=>{
    try{
      const user = await userModel.findByIdAndUpdate(req.params.id,req.body)
      if(!user){
        res.status(404).send("No item found")
      }else{
        await user.save()
        res.status(200).send(user)
      }
    }catch(err){
      res.status(500).send(err)
    }
  })

  // show follower
router.get('/user/:id/follower',async (req,res)=>{
    try{
      const {id} = req.params;
      const follower = await userModel.findById(id).populate('follower')
      res.send(follower.follower)
    }catch(err){
      res.status(500).send(err)
    }
  })

  // add follower
router.post('/user/:id/follower',async (req,res)=>{
  try{
    //res.send(req.params.id)
    const {id} = req.params.id
    const user = await userModel.findById(id)
    await userModel.update(
      {$addToSet: {follower: req.body.follower}}
    )
    res.send("Success")
  }catch(err){
    res.status(500).send(err)
  }
})

  //delete follower
  router.delete('/user/:id/follower/:followerid',async (req,res)=>{
    try{
      //res.send(req.params)
      const user = await userModel.findById(req.params.id)
      await user.update(
        {$pull: {follower: req.params.followerid}}
        )
      res.send("Success")
    }catch(err){
      res.status(500).send(err)
    }
  })

module.exports = router