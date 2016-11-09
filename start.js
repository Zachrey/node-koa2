//==========================================================================
//koa结合mongodb测试
//==========================================================================
const 
    Koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    serverStatic = require('koa-static'),
    app = new Koa(),
    views = require('koa-views'),
    path = require('path');
const PORT = 8000;

//配置nunjucks
var nj = require('nunjucks');
nj.configure(path.join(__dirname,'views'), {
    autoescape: true,
    koa: app
});
//加载静态文件位置
app.use(serverStatic(__dirname + '/public'));
//设置动态模块
app.use(views(path.join(__dirname,'views'), { map: {nj: 'nunjucks' }}))

app.use(bodyParser());
//==========================================================================
//配置路由、控制器
//==========================================================================
const addController =  require('./controller');
app.use(addController());

//==========================================================================
//添加端口监听
//==========================================================================
app.listen(PORT);
console.log(`app is running on port ${PORT} ...`);
