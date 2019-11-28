const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  avatar: {type: String,required: true},
  username: {type: String,required: true},
  password: {type: String,required: true},
  email: {type: String,required: true},
  follower: [{type: Schema.Types.ObjectId, ref: 'User'}],
  favGame: [{type: Schema.Types.ObjectId, ref: 'Game'}]
},{ versionKey: false })

module.exports = mongoose.model('User',userSchema)