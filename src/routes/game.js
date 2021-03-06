const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');

// model for data
const tagModel = require('../models/tagModel')
const gameModel = require('../models/gameModel')

//show all games //
router.get('/game',async (req,res)=>{
  const game = await gameModel.find({})
  try{
    res.send(game)
  }catch(err){
    res.status(500).send(err)
  }
})

// show a game's tag //
router.get('/game/:id/tag',async (req,res)=>{
  try{
    const {id} = req.params;
    const game = await gameModel.findById(id).populate('tag')
    res.send(game.tag)
  }catch(err){
    res.status(500).send(err)
  }
})

// show a tag's games //
router.get('/tag/:id/game',async (req,res)=>{
  try{
    const {id} = req.params;
    const tag = await tagModel.findById(id).populate('game')
    res.send(tag.game)
    }catch(err){
    res.status(500).send(err)
  }
})

// show a game's dev //
router.get('/game/:id/developer',async (req,res)=>{
  try{
    const {id} = req.params;
    const game = await gameModel.findById(id).populate('dev')
    res.send(game.dev)
  }catch(err){
    res.status(500).send(err)
  }
})

// add a game //
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

// add tags to a game //
router.post('/game/:id/tag',async (req,res)=>{
  try{
    const {id} = req.params
    const game = await gameModel.findById(id)
    await game.update(
      {$addToSet: {tag: {$each: req.body.tag}}}
    )
    res.send("Success")
  }catch(err){
    res.status(500).send(err)
  }
}
)

// add dev to a game //
router.post('/game/:id/developer',async (req,res)=>{
  try{
    const {id} =req.params
    const game = await gameModel.findById(id)
    const devDoc = req.body
    game.dev = devDoc.dev
    await game.save()
    res.send(game)
  }catch(err){
    res.status(500).send(err)
  }
})

// delete game //
router.delete('/game/:id',async (req,res)=>{
  try{
    const {id} = req.params
    const game = await gameModel.findById(id)
    if(!game){
      res.status(404).send("No item found")
    }else{
      await game.remove({_id: game._id})
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})

// update game //
router.patch('/game/:id',async (req,res)=>{
  try{
    const game = await gameModel.findByIdAndUpdate(req.params.id,req.body)
    if(!game){
      res.status(404).send("No item found")
    }else{
      await game.save()
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})

//show a game
router.get('/game/:id',async (req,res)=>{
  try{
    gameid = mongoose.Types.ObjectId(req.params.id)
    const game = await gameModel.aggregate([
      {$match: {_id: gameid}}
    ])
    res.send(game)
  }catch(err){
    res.status(500).send(err)
  }
})


module.exports = router