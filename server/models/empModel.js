mongoose = require("mongoose")

mongoose.Promise = global.Promise

const empSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : false
    } 

})

module.exports = mongoose.model('empDbObj', empSchema)