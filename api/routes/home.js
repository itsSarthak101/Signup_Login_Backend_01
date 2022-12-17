const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to home. Welcome to the Home route!'} )
})

module.exports = router;