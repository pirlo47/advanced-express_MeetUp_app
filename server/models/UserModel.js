const mongoose = require('mongoose'); 
const emailValidator = require('email-validator');
const { validOptions } = require('mongodb/lib/operations/connect');

const UserSchema = mongoose.Schema({
    //data defination 
    username: {
        type: String, 
        required: true,
        trim: true,
        index: { unique: true }, 
        minlength: 3,
    },

    email: {
        type: String,
        required: true,
        trim: true, 
        lowercase: true, 
        index: { unique: true }, 
        validate: {
            validator: emailValidator.validate,
            message: props =>`${props.value} is not a valid email address!`, 
        },
    }, 

    password: {
        type: String, 
        required: true,
        trim: true,
        index: { unique: true }, 
        minlength: 8,
    },

}, {
    //Mongoose to add timestamps for each document created
    timestamps: true,  
}); 

module.exports = mongoose.model('User', UserSchema); 