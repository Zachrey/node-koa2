//添加用户信息到mongo数据库

const mongoose = require('../schema/user.server');
var addUser = async (ctx, next) => {
    var User = mongoose.model('User');
    var data = ctx.request.body,
        insData = {};
    if(data.id){
        insData.id = data.id;
        insData.name = data.userName;
        insData.major = data.major;
        insData.gender = data.gender;
        insData.phoneNo = data.phoneNo;
        insData.email = data.email;
    }else{
        insData = '';
        ctx.body = '数据格式不对！';
        return;
    }
    var user = new User(insData);
    await user.save(async (err) => {
        if(err){
            ctx.body = '保存失败！';
            return;
        }else{
            ctx.body = '保存成功！';
        }
    })
}

module.exports = {
    'POST /addUser.server' : addUser
} 