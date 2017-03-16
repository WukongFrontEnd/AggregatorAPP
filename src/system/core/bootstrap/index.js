/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> core -> bootstrap ->index.js
3. 作者：zhaohuagang@lifang.com
4. 备注：系统启动项 -> 对启动项的整合
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载相关资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import viewEngine from "./viewEngine" ;
import globalMiddlewares from "./globalMiddlewares" ;
import routerRegister from "./routerRegister" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
模块输出为一个方法，在app.js中执行，把以express创建的应用app当做参数
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
export default function(app) {
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    模板目录以及引擎设置
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/ 
    viewEngine(app) ;
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    全局中间件注册
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/ 
    globalMiddlewares(app) ;
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    路由自动注册
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/ 
    routerRegister(app) ;
} ;