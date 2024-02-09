// Importing mongoose module
const mongoose = require('mongoose');

// Defining a schema for the user data
var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true // Name is a required field
    },
    email : {
        type: String,
        required: true, // Email is a required field
        unique: true // Email must be unique
    },
    gender : String, // Gender is optional
    status : String // Status is optional
});

// Creating a model based on the schema
const Userdb = mongoose.model('userdb', schema);

// Exporting the Userdb model
module.exports = Userdb;