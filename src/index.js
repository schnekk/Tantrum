const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connect to db
mongoose.connect('mongodb+srv://Admin:tantrum@cluster0-gfhpd.gcp.mongodb.net/Streaddit?retryWrites=true&w=majority', { useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify: false })

//body passing for postman
app.use(express.json())

//set routes
const tagRoute = require('./routes/tag')

//all routes are called here
app.use(tagRoute)

app.listen(5000, () => {
  console.log('Server is running.')
})
