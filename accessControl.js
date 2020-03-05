//设置允许跨域访问该服务.
module.exports = (app) => {
    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
}
