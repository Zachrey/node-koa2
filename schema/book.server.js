//==========================================================================
//book信息
//==========================================================================
// const mongoose = require('mongoose');
const mongoose = require('../connect.mongo');
var BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    publishTime: Date
});
mongoose.model('Book',BookSchema);
module.exports = mongoose;