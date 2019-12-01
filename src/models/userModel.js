const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  avatar: {type: String,required: true},
  username: {type: String,required: true},
  displayName: {type: String,required: true},
  password: {type: String,required: true},
  email: {type: String,required: true},
  favTag: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  follower: [{type: Schema.Types.ObjectId, ref: 'User'}],
  favGame: [{type: Schema.Types.ObjectId, ref: 'Game'}]
},{ versionKey: false })

//remove user from follower list
userSchema.pre('remove', function(next){
  try{
    mongoose.model("User").update(
      {},
      {$pull: {follower: this._id}}
      ).exec()
    next()
  }catch(err){
    next(err)
  }
})

module.exports = mongoose.model('User',userSchema)