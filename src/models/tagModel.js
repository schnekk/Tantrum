const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new mongoose.Schema({
  name: {type: String,unique: true,required: 'Please enter tag name.'},
  description: {type: String,required: 'Please enter tag description.'},
  game: [{type:Schema.Types.ObjectId, ref: 'Game'}]
},{ versionKey: false })

module.exports = mongoose.model('Tag',tagSchema)