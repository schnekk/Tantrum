const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new mongoose.Schema({
  name: {type: String,unique: true,required: 'Please enter tag name.'},
  description: {type: String,required: 'Please enter tag description.'},
  game: [{type:Schema.Types.ObjectId, ref: 'Game'}]
},{ versionKey: false })

// remove a tag in game before remove tag
tagSchema.pre('remove', function(next){
  try{
    mongoose.model("Game").update(
      {},
      {$pull: {tag: this._id}},
      {multi: true}  
      ).exec()
    next()
  }catch(err){
    next(err)
  }
})

// remove a tag in user after remove tag
tagSchema.post('remove', function(doc){
  try{
    mongoose.model("User").update(
      {},
      {$pull: {favTag: this._id}},
      {multi: true}
    ).exec()
    console.log(doc)
  }catch(err){
    next(err)
  }
})


module.exports = mongoose.model('Tag',tagSchema)