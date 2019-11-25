const express = require('express')
const router = express.Router()

// model for data
const tagModel = require('../models/tagModel')
const devModel = require('../models/devModel')
const gameModel = require('../models/gameModel')

//show all games
router.get('/game',async (req,res)=>{
  const game = await gameModel.find({})
  try{
    res.send(game)
  }catch(err){
    res.status(500).send(err)
  }
})

// add a game
router.post('/game',async (req,res)=>{
    try{
      const game = await new gameModel({
        title: req.body.title,
        description: req.body.description,
        tag:[],
        dev:null,
        review:[],
        link: req.body.link
      })
      await game.save()
      res.send(game)
    }catch(err){
      res.status(500).send(err)
    }
  })

// show a game's tag
router.post('/game/:id/tag',async (req,res)=>{
  try{
    const {id} = req.params;
    const game = await gameModel.findById(id).populate('tag')
    res.send(game.tag)
  }catch(err){
    res.status(500).send(err)
  }
})

// add tag to a game
router.post('/game/:id',async (req,res)=>
{
  
})
// delete game
router.delete('/game/:id',async (req,res)=>{
  try{
    const game = await gameModel.findByIdAndDelete(req.params.id)
    if(!game){
      res.status(404).send("No item found")
    }else{
      res.status(200).send(game)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

// update game
router.patch('/game/:id',async (req,res)=>{
  try{
    const game = await gameModel.findByIdAndUpdate(req.params.id,req.body)
    if(!game){
      res.status(404).send("No item found")
    }else{
      await game.save()
      res.status(200).send(game)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router