const mongoose = require('mongoose');

const specialtiesSchema = mongoose.Schema({
    skill : {
        type : String,
    },
    rol : {
        type : String,
    },
    type : {
        type: String,
    }
},{versionKey: false})


const specialtiesModel = mongoose.model('specialties', specialtiesSchema)

module.exports = specialtiesModel;