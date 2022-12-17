const express = require('express')
const bcrypt = express.Router()
const router = express.Router()

const Signup = require('../model/signup')

// localhost:5001/users/login
router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/login and session is in use', loginHandler: req.session.user} )
})

// localhost:5001/users/login/variableId
router.get('/:variableId', (req, res) => {
    const reqParams = req.params.variableId
    
    res.status(200).json( {message: `GET request to /users/login/${reqParams}`} )
})

// POST request to the server
router.post('/', (req, res) => {
    const userEmail = req.body.email
    const userPassword = req.body.password

    // Function to filter from the documents where the email matches the document.
    Signup.find({email: userEmail})
        // Datatype of this result will be an Array of object
        .then(result => {
            if(result.length === 0) {
                res.status(400).json( {message: "Records Not Found", recourds: result} )
            }
            else {
                // Decryption
                bcrypt.compare(req.body.password, result[0].password)
                    .then(result => {
                        if(result) {
                            // res.status(200).json( {message: "Authorized User"} )
                            const loginHandler = {
                                email: req.body.email,
                                password: req.body.password
                            }
        
                            // Session creation
                            res.session.user = loginHandler
                            req.session.save()
                            res.status(200).json( {message: `User Authenticated and the session is started for email: ${req.session.user.email}`} )
                        }
                        else {
                            res.status(400).json( {message: "Unauthorized User!"} )
                        }
                    })
                    .catch(err => res.status(500).json( {message: 'Server Error', error: err} ))
            }
        })
        .catch(err => res.status(500).json( {message: "Server Error!", records: err}) )
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/login'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/login'} )
})

module.exports = router;