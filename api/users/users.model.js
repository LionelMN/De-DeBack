const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required: true,
        minLength : 2
    },
    email : {
        type : String,
        unique : true,
        required: true,
        validate : (email) => emailValid(email)
    },
    name : {
        type: String,
        required: false,
    },
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'
        }
    ],
    postsLiked : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'
        }
    ],
    password: {
        type: String,
        required: true,
        minLength: 10
    },
    contacts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    rol: [
            {
            type : String,
            enum: ['developer', 'designer','musician','writer'],
            required: true,
        }
    ],
    skills: [
        {
            skills: String,
            type: String
        }
    ],
    img : String,
    websites:
        {
            type : Array,
        },

    ubication: String,
    needd:
        {
            type: Array,
        },
    biography: String


},{versionKey: false})
function emailValid(email){
    return /^\S+@\S+\.\S+$/.test(email)
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;