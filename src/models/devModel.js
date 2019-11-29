const mongoose = require('mongoose')

const gameModel = require('../models/gameModel')

const devSchema = new mongoose.Schema({
  name: {type: String,required: true},
},{ versionKey: false })

// remove a dev in games before remove dev
devSchema.pre('remove', function(next){
  try{
    gameModel.update(
      {dev: this._id},
      {$set: {dev: null}} ,
      {multi: true}  
      ).exec()
    next()
  }catch(err){
    next(err)
  }
})

module.exports = mongoose.model('Dev',devSchema)