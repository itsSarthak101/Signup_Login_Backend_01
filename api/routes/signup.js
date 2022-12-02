const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const Signup = require('../model/signup')

router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/signup'} )
})

router.post('/', (req, res) => {
    const newUser = new Signup({
        _id: mongoose.Types.ObjectId(), 
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()
        .then(result => res.status(201).json( {message: "Signup Successful", details: result} ))
        .catch(err => res.status(500).json( {message: "Server Encountered an Error", error: err} ))
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/signup'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/signup'} )
})

module.exports = router;