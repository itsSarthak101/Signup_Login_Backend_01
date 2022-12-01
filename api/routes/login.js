const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/login'} )
})

router.post('/', (req, res) => {
    res.status(200).json( {message: 'POST request to /users/login'} )
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/login'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/login'} )
})

module.exports = router;