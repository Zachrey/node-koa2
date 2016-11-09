//==========================================================================
//user信息
//==========================================================================
// const mongoose = require('mongoose');
const mongoose = require('../connect.mongo');
var BookSchema = new mongoose.Schema({
    id : String,
    name : String,
    major : String,
    gender : String,
    phoneNo : String,
    email : String
});
mongoose.model('User',BookSchema);
module.exports = mongoose;