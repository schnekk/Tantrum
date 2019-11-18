const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
  name: {type: String,unique: true},
  description: String
},{ versionKey: false })

module.exports = mongoose.model('Tag',tagSchema)