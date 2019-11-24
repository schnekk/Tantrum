const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  title: {type: String,required: true},
  description: {type: String,required: true},
  tag:{type:[{type:Schema.Types.ObjectId, ref: 'Tag'}],required:true},
  link:{type:String},
  dev:{type:[{type:Schema.Types.ObjectId, ref: 'Dev'}],required:true}
},{ versionKey: false })

module.exports = mongoose.model('Game',gameSchema)