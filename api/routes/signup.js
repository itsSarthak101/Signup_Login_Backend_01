const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/signup'} )
})

router.post('/', (req, res) => {
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword

    const userDetails = {
        email: userEmail,
        password: userPassword
    }
    res.status(201).json( {message: 'Signed-Up to the Server', details: userDetails} )
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/signup'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/signup'} )
})

module.exports = router;