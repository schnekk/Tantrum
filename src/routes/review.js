const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');

// model for data
const reviewModel = require('../models/reviewModel')

//show all reviews
router.get('/review',async (req,res)=>{
    const review = await reviewModel.find()
    try{
      res.send(review)
    }catch(err){
      res.status(500).send(err)
    }
  })

  // add a review
router.post('/review',async (req,res)=>{
    try{
      const review = await new reviewModel({
        user: null,
        game: req.body.game,
        review: req.body.review,
        score: req.body.score
      })
      await review.save()
      res.send(review)
      res.send(req.body)
    }catch(err){
      res.status(500).send(err)
    }
  })

// delete review
router.delete('/review/:id',async (req,res)=>{
  try{
    const review = await reviewModel.findByIdAndDelete(req.params.id)
    if(!review){
      res.status(404).send("No item found")
    }else{
      res.status(200).send(review)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

  // update review
router.patch('/review/:id',async (req,res)=>{
  try{
    const review = await reviewModel.findByIdAndUpdate(req.params.id,req.body)
    if(!review){
      res.status(404).send("No item found")
    }else{
      await review.save()
      res.status(200).send(review)
    }
  }catch(err){
    res.status(500).send(err)
  }
})

  //find mean
router.get('/review/:gameid/mean',async (req,res)=>{
  try{
    gameid = mongoose.Types.ObjectId(req.params.gameid)
    const review = await reviewModel.aggregate([
      {$match: {game: gameid}},
      {
        $group:{
          _id: "$game",
          avgScore: {$avg: "$score"}
        }
      }
    ])
    res.send(review)
   }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router