// Model for Signup route
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: {
        type:mongoose.Schema.Types.ObjectId,
        // required: true
    },
    email: {
        type:mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type:mongoose.Schema.Types.String,
        required: true
    },
    
    newPassword: {
        type: mongoose.Schema.Types.String
    }

    // _id: mongoose.Schema.Types.ObjectId,
    // email: mongoose.Schema.Types.String,
    // password: mongoose.Schema.Types.String,
})

// module.exports = mongoose.Model(nameOfTheImport, schemaToBeExported)
module.exports = mongoose.model("Signup", userSchema)