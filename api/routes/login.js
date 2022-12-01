const express = require('express')
const router = express.Router()


// localhost:5001/users/login
router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/login'} )
})

// localhost:5001/users/login/variableId
router.get('/:variableId', (req, res) => {
    const reqParam = req.params.variableId
    
    res.status(200).json( {message: 'GET request to /users/login/${reqParams}'} )
})

// POST request to the server
router.post('/', (req, res) => {
    const userId = req.body.userId
    const userPassword = req.body.password

    res.status(200).json( {message: 'POST request to /users/login', details: 'UserId: ${userId} and Password: ${userPassword}'} )
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/login'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/login'} )
})

module.exports = router;