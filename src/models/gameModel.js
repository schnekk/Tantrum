const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagModel = require('../models/tagModel')

const gameSchema = new mongoose.Schema({
  title: {type: String,required: 'Please enter title name.'},
  description: {type: String,required: 'Please enter game description.'},
  tag: [{type:Schema.Types.ObjectId, ref: 'Tag'}],
  dev: {type:Schema.Types.ObjectId, ref: 'Dev'},
  review:[{type:Schema.Types.ObjectId, ref: 'Review'}],
  link: {type:String}
},{ versionKey: false })

// add a game to each tags
gameSchema.post('update', function(doc){
  try{
      tagModel.update(
        {_id: {$in: this._update.$addToSet.tag.$each}},
        {$addToSet: {game: this._conditions._id}},
        {multi: true}
      ).exec()
  }catch(err){
    console.log(err)
  }
})

// remove a game in tag before remove game
gameSchema.pre('remove', function(next){
  try{
    tagModel.update(
      {},
      {$pull: {game: this._id}},
      {multi: true}  
      ).exec()
    next()
  }catch(err){
    next(err)
  }
})

module.exports = mongoose.model('Game',gameSchema)