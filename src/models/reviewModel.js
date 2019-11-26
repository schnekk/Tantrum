const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema({
  user: {type:Schema.Types.ObjectId, ref: 'User'},
  game: {type:Schema.Types.ObjectId, ref: 'Game'},
  review: {type: String},
  score: {type: Number,required:'Please enter your score.',min:0,max:5},
},{ versionKey: false, timestamps: true })

module.exports = mongoose.model('Review',reviewSchema)