//==========================================================================
//koa结合mongodb测试
//==========================================================================
const 
    Koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    serverStatic = require('koa-static'),
    app = new Koa();
const PORT = 8000;

//加载静态文件位置
app.use(serverStatic(__dirname + '/public'));

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
