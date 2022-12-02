const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Signup = require('../model/signup')


// localhost:5001/users/login
router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/login'} )
})

// localhost:5001/users/login/variableId
router.get('/:variableId', (req, res) => {
    const reqParams = req.params.variableId
    
    res.status(200).json( {message: `GET request to /users/login/${reqParams}`} )
})

// POST request to the server
router.post('/', (req, res) => {
    const Email = req.body.email
    const Password = req.body.password

    // Function to filter from the documents where the email matches the document.
    Signup.find({email: Email})
        // Datatype of this result will be an Array of object
        .then(result => res.status(201).json( {message: "Records Found!", records: result} ))
        .catch(err => res.status(500).json( {message: "Server Error!", records: err}) )
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/login'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/login'} )
})

module.exports = router;