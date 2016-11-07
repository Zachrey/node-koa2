//==========================================================================
//查询数据库里面的数据
//==========================================================================
const mongoose = require('../schema/book.server');
var findData = async (ctx, next) => {
    var Book = mongoose.model('Book');
    var query = Book.find({'name':'nodejs'});
    await query.then(async (docs) => {
        // console.log(docs);
        ctx.body = docs;
    });
}

module.exports = {
    'GET /find': findData
}