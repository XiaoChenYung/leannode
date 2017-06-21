/**
 * Created by tm on 2017/6/21.
 */
module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render('index', { currentTime: new Date() });
    });

    // 可以将一类的路由单独保存在一个文件中
    app.use('/todos', require('./todos'));
    app.use('/user', require('./user'));

    app.use(function(req, res, next) {
        // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
        if (!res.headersSent) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        }
    });
}
