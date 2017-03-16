/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> application -> app.js
3. 作者：zhaohuagang@lifang.com
4. 备注：整个express运行生命周期
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载相关资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import express from "express" ;
import bootstrap from "../system/core/bootstrap/index" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
应用启动
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
let app = express() ;
bootstrap(app) ;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500) ;
    res.render('error', {
      message : err.message ,
      error : err
    }) ;
  }) ;
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500) ;
  res.render('error', {
    message : err.message ,
    error : {}
  }) ;
}) ;


module.exports = app ;
