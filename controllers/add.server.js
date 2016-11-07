
//==========================================================================
//添加数据到mongodb
//==========================================================================
// const mongoose = require('mongoose');
const mongoose = require('../schema/book.server');
var addData = async (ctx, next) => {
    var Book = mongoose.model('Book');
    var book = new Book({
        name: 'nodejs',
        author: 'zachrey',
        publishTime: new Date()
    });
    var body;
    await book.save(async (err) => {
        if(err){
            console.log('insert data error for mongodb ...');
            return;
        }
        body = 'save success!';
    });
    ctx.body = body;
}

module.exports = {
    'GET /add' : addData 
}