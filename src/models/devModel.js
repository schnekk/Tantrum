const mongoose = require('mongoose')

const devSchema = new mongoose.Schema({
  name: {type: String,required: true},
},{ versionKey: false })

module.exports = mongoose.model('Dev',devSchema)