
//nunjucks测试
const mongoose = require('../schema/user.server');
var nunjucks = async (ctx, next) => {
    var User = mongoose.model('User'),
        //得到url的参数 name
        name = ctx.query.name,
        //带入数据库查询
        promise = User.findOne({name:name});
    if( name ){   //如果参数不为空
        var info;
        //执行查询，得到结果
        await promise.exec().then(async doc => {
            info = doc;
        });
        //如果查询结果有值
        if(info){
            var data = {
                userName : info.name,
                info : {
                    id : info.id,
                    major : info.major,
                    gender : info.gender ,
                    phoneNo : info.phoneNo,
                    email : info.email
                }
            };
        }else{
            var data = '';
        }
    }else{
        var data = '';
    }
    await ctx.render('user.nj',data);
}

module.exports = {
    'GET /view-test' : nunjucks 
}