const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connect to db
mongoose.connect('mongodb+srv://Admin:tantrum@cluster0-gfhpd.gcp.mongodb.net/streaddit?retryWrites=true&w=majority', 
{ useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify: false,useCreateIndex: true })

//CORS setting
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//body passing for postman
app.use(express.json())

//set routes
const tagRoute = require('./routes/tag')
const devRoute = require('./routes/dev')
const gameRoute = require('./routes/game')
const reviewRoute = require('./routes/review')

//all routes are called here
app.use(tagRoute)
app.use(devRoute)
app.use(gameRoute)
app.use(reviewRoute)

app.listen(5000, () => {
  console.log('Server is running.')
})
