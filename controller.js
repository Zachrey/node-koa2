//==========================================================================
//遍历控制器文件夹，获取路由操作函数
//==========================================================================
const fs = require('fs');
0

var addMapping = async (router, mapping) => {
    for (var url in mapping) {
        if( url.startsWith('GET ')){
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register router -- GET : ${path}`);
        }else if(url.startsWith('POST ')){
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register router -- POST: ${path}`);
        }else{
            console.log(`not found ${url}`);
        }
    }
}

var addControllers = async (router, folder) => {
    var files = fs.readdirSync(__dirname + '/' + folder).filter((f)=>{
        return f.endsWith('.js');
    });
    for(var f of files){
        let mapping = require(__dirname + '/' + folder + '/' + f);
        console.log(`process folder : ${f}`);
        addMapping(router, mapping);
    }
}

module.exports = (folder) => {
    var 
        f = folder || 'controllers',
        router = require('koa-router')();
    addControllers(router, f);
    return router.routes();
}

