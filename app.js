const express = require('express')
const cors = require('cors')
const app = express()

const bodyparser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Using CORS
app.use(cors())

// Using Body-Parser
app.use(bodyparser.urlencoded( {extended: false} ))
app.use(bodyparser.json())

// Using Morgan
app.use(morgan('dev'))

// Using Mongoose
mongoose.connect('mongodb+srv://Sarthak1202:sarthak1395mongodb@cluster0.omuy5ko.mongodb.net/SignUp_Login_Backend_01?retryWrites=true&w=majority')
    .then(console.log('Connection Successful'))
    .catch(err => console.log(err))

// OR async () => await mongoose.connect('mongodb+srv://Sarthak1202:sarthak1395mongodb@cluster0.omuy5ko.mongodb.net/SignUp_Login_Backend_01?retryWrites=true&w=majority')

// Routes Handling
const homeRoute = require('./api/routes/home')
const loginHandler = require('./api/routes/login')
const signupHandler = require('./api/routes/signup')

app.use('/', homeRoute)
app.use('/users/login', loginHandler)
app.use('/users/signup', signupHandler)

app.use((req, res) => {
    res.status(404).json({ message: 'Not Working!' })
})

module.exports = app;