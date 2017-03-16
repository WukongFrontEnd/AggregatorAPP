/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> core -> bootstrap -> globalMiddlewares.js
3. 作者：zhaohuagang@lifang.com
4. 备注：系统启动项 -> 全局中间件注册
              system级别的全局中间件是全部加载并use的，如果是选择加载的就归纳为application级别中间件
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载相关资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import loader from "../../libraries/loader"
import bodyParser from "body-parser" ;
import cookieParser from "cookie-parser" ;
import _ from "lodash" ;
import middlewareConf from "../../../application/configs/middleware" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
取出system级和application级的中间件
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
let systemGlobalMiddlewares = loader.load("system/middlewares/global") ;
let applicationGlobalMiddlewares = loader.load("application/middlewares/global") ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
模块输出为一个方法，在app.js中执行，把以express创建的应用app当做参数
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
export default function(app){
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    将client提交过来的post请求放入request.body中
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    app.use(bodyParser.json()) ;
    app.use(bodyParser.urlencoded({ extended: false })) ;
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    将请求的cookie都解析出来
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    app.use(cookieParser()) ;
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    system级别的全局中间件注册(全部注册)
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/     
    for(let m in systemGlobalMiddlewares) {
        if (_.isFunction(systemGlobalMiddlewares[m]["default"])) app.use(systemGlobalMiddlewares[m]["default"]) ;        
    }   
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    其他的在application中配置的全局中间件注册
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    if (_.isArray(middlewareConf.global) && middlewareConf.global.length) {
        for (let n of middlewareConf.global) {
            if (_.isFunction(applicationGlobalMiddlewares[n]["default"])) app.use(applicationGlobalMiddlewares[n]["default"]) ;
        }
    }
} ;