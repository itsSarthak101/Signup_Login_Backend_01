const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    loggedinUser = req.session.user

    req.session.destroy()
    res.status(200).json( {message: "User Logged Out!"} )
})

module.exports = router;