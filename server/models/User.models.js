var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
        , required: [true, "FirstName is required"]
        , minlength: [2, "FirstName must be at least 2 characters long"]
        , maxlength: [40, "FirstName must be at less than 40 characters"]
    }
    ,lastName: {
        type: String
        , required: [true, "LastName is required"]
        , minlength: [2, "LastName must be at least 2 characters long"]
        , maxlength: [40, "LastName must be at less than 40 characters"]
    }
    ,email: {
        type: String
        , required: [true, "Email is required"]
        , minlength: [3, "Email must be at least 3 characters long"]
        , maxlength: [40, "Email must be at less than 40 characters"]
        , unique: [true, "Email must be unique"]
    }
    ,username: {
        type: String
        , required: [true, "Username is required"]
        , minlength: [3, "Username must be at least 3 characters long"]
        , maxlength: [40, "Username must be at less than 40 characters"]
        , unique: [true, "Password must be unique"]
    }
    ,password: {
        type: String
        , required: [true, "Password is required"]
        , minlength: [4, "Password must be at least 3 characters long"]
        , maxlength: [40, "Password must be at less than 255 characters"]
    }

}, { timestamps: true });

UserSchema.plugin(uniqueValidator);
module.exports.User = mongoose.model('User', UserSchema);
