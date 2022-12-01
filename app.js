const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const morgan = require('morgan')

app.use(bodyparser.urlencoded( {extended: false} ))
app.use(bodyparser.json())

app.use(morgan('dev'))

// Routes Handling
const loginHandler = require('./api/routes/login')
const signupHandler = require('./api/routes/signup')

app.use('/users/login', loginHandler)
app.use('/users/signup', signupHandler)

app.use((req, res) => {
    res.status(404).json({ message: 'Not Working!' })
})

module.exports = app;