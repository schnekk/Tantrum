const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connect to db
mongoose.connect('mongodb+srv://Admin:tantrum@cluster0-gfhpd.gcp.mongodb.net/streaddit?retryWrites=true&w=majority', 
{ useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify: false,useCreateIndex: true })

//cors for send data across ports
cors = require('./cors')
app.use(cors())

//body passing for postman
app.use(express.json())

//set routes
const tagRoute = require('./routes/tag')

//all routes are called here
app.use(tagRoute)

app.listen(5000, () => {
  console.log('Server is running.')
})
