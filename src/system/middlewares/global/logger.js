/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> middlewares -> global ->  logger.js
3. 作者：zhaohuagang@lifang.com
4. 备注：整个express运行生命周期
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
载入资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import logger from "../../libraries/logger" ;

export default function (req, res, next) {
    req.app.locals.log = logger;
    logger.info(`=======request_url=======:${req.url} `) ;
    // logger.info(`request_headers:${JSON.stringify(req.headers)}`);
    switch (req.method) {
        case "POST":
            logger.info(`request_params:${JSON.stringify(req.body)}`) ;
            break;
        case "GET":
            logger.info(`request_params:${JSON.stringify(req.query)}`) ;
            break;
        default:
            logger.warn(`invalid request!`) ;
            next(new Error('invalid request!')) ;
            break;
    } ;
    next() ;
} ;
