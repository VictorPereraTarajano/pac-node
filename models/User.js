var mongoose = require('mongoose');

var User =  mongoose.model('User', new mongoose.Schema({
    email : mongoose.SchemaTypes.Email,
    name : {
        type : String,
        default : 'An�nimo'
    },
    first_name : {
        type : String,
        default : ''
    },
    last_name : {
        type : String,
        default : ''
    },
    password_enc : String
}));

module.exports = User;
