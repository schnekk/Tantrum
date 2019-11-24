const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
  name: {type: String,unique: true,required: true},
  description: {type: String,required: true}
},{ versionKey: false })

module.exports = mongoose.model('Tag',tagSchema)