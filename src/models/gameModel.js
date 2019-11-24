const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new mongoose.Schema({
  title: {type: String,required: 'Please enter title name.'},
  description: {type: String,required: 'Please enter game description.'},
  tag: [{type:Schema.Types.ObjectId, ref: 'Tag'}],
  dev: {type:Schema.Types.ObjectId, ref: 'Dev'},
  review:[{type:Schema.Types.ObjectId, ref: 'Review'}],
  link: {type:String}
},{ versionKey: false })

module.exports = mongoose.model('Game',gameSchema)