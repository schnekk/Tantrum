const express = require('express')
const app = express()
const mongoose = require('mongoose')

//set routes
const tagRoute = require('./routes/tag')

//body passing for postman
app.use(express.json())

//connect to db
mongoose.connect('mongodb://localhost:27017/streaddit', { useUnifiedTopology: true,useNewUrlParser: true })

//all routes are called here
app.use(tagRoute)

//error handling
app.use(function(err,req,res,next){
  // console.log(err)
  res.send({error: err.errmsg})
})

app.listen(8080, () => {
  console.log('Server is running.')
  console.log('Halo from jems')
})
