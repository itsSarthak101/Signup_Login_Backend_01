// Model for Signup route

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
})

// module.exports = mongoose.Model(nameOfTheImport, schemaToBeExported)
module.exports = mongoose.model("Signup", userSchema)