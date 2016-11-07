//==========================================================================
//mongo的连接
//==========================================================================
const 
    mongoose = require('mongoose'),
    mUrl = require('./config');

mongoose.connect(mUrl.mongoUrl);

module.exports = mongoose;