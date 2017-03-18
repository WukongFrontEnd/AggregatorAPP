/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> middlewares -> api ->  cors.js
3. 作者：zhaohuagang@lifang.com
4. 备注：白名单跨域处理
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
载入资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import corsConf from "../../../application/configs/cors" ;

export default function (req, res, next) {
    let origin = req.headers.origin ;
    let env = process.env.STAGE_ENV ;
    let whiteList = corsConf[env] ;    
    if (whiteList === "*" || whiteList.indexOf(origin) !== -1) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
        res.header('Access-Control-Allow-Credentials', true) ;
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE') ;
    }
    next() ;
} ;
