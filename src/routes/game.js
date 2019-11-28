const express = require('express')
const router = express.Router()

// model for data
const tagModel = require('../models/tagModel')
const devModel = require('../models/devModel')
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

router.get('/tag/:id/game',async (req,res)=>{
  try{
    const {id} = req.params;
    gameModel.findById(id).populate('game').exec((err,tag)=>{
      tag.game=tag.game.filter(element=>element!=null)
      res.send(tag)
      tag.save()
    })
  }catch(err){
    res.status(500).send(err)
  }
})

// add tags to a game and add a game to tags
router.post('/game/:id/tag',async (req,res)=>{
  try{
    const {id} = req.params
    const game = await gameModel.findById(id)
    await game.update(
      {$addToSet: {tag: {$each: req.body.tag}}}
    )
    await tagModel.update(
      {_id: {$in:game.tag}},
      {$addToSet: {game: game._id}},
      {multi: true}
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

// delete game
router.delete('/game/:id',async (req,res)=>{
  try{
    const {id} = req.params
    const game = await gameModel.findById(id)
    tagModel.update(
      {_id:{$in: game.tag}},
      {$pull: {game: game._id}},
      {multi: true}
    )
    //await gameModel.findByIdAndDelete(id)
    if(!game){
      res.status(404).send("No item found")
    }else{
      res.status(200).send("Success")
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
      res.status(200).send("Success")
    }
  }catch(err){
    res.status(500).send(err)
  }
})


module.exports = router