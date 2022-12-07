const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const Signup = require('../model/signup')

router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/signup'} )
})

router.post('/', (req, res) => {
    Signup.find( {email: req.body.email} )
        .then(result => {
            if(result.length != 0) {
                // The email already exist
                res.status(400).json( {message: "Email Already Exist"} )
            }
            else {
                // Email doesn't exist
                const newUser = new Signup({
                    _id: mongoose.Types.ObjectId(), 
                    email: req.body.email,
                    password: req.body.password
                })
                // Check functionality where records of the users and check if the input email does not exist in the records
                newUser.save()
                    .then(result => res.status(201).json( {message: "Signup Successful", details: result} ))
                    .catch(err => res.status(500).json( {message: "Server Encountered an Error", error: err} ))
            }
        })
        .catch(err => res.status(500).json( {message: "error", error: err} ))

    
})

router.patch('/', (req, res) => {
    // Edit passwords
    //if user exist, match with old password. if false then edit the password.
    const oldPassword = req.body.password
    const newPassword = req.body.newPassword
    
    Signup.find( {email: req.body.email} )
        .then(result => {
            if(result.length === 0) {
                // User don't exist
                res.status(400).json( {message: "User or password doesn't exist"} )
            }
            else {
                if(result[0].password === oldPassword) {
                    const updatedUser = {
                        _id: result[0]._id,
                        email: result[0].email,
                        password: newPassword
                    }
                    Signup.findByIdAndUpdate(result[0]._id, updatedUser)
                        .then(result => res.status(200).json( {message: "Password Changed", updatedUser: result} ))
                        .catch(err => res.status(500).json( {message: "Server Error", error: err} ))
                }
                else {
                    res.status(400).json( {message: "Email or password don't match"} )
                }
            }
        })
        .catch(err => res.status(500).json( {message: "Server Error", error: err} ))

    // res.status(200).json( {message: 'PATCH request to /users/signup'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/signup'} )
})

module.exports = router;