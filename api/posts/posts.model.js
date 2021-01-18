const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    text : {
        type : String,
        minLength : 2,
        maxLength : 255
    },
    owner : {
        type : String,
        required: true
    },
    createdAt : {
        type : Number,
        default : () => Date.now()
    },
    pictures:
    {
        type: Array,
        default:['default.png'],
        validate: [pictureLimit, '{PATH} exceeds the limit of 5']
    },
    likes : {
       type: Number,
       default: () => 0
    },
    need:
        {
        type : Array
        }
    ,
    title: String,
    category: String
});

function pictureLimit(val) {
    return val.length <= 5;
  }

const postsModel = mongoose.model('post', userSchema)

module.exports = postsModel;
