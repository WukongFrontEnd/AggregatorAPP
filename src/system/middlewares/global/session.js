/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> middlewares -> global -> session.js
3. 作者：zhaohuagang@lifang.com
4. 备注：对session的处理
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
载入相关资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import session from "express-session" ;
import Redis from "ioredis" ;
import connectRedis from "connect-redis" ;
import redisUtil from "../../libraries/redis" ;

export default function (req, res, next) {
    let sessionConf = req.app.locals.confs.session ;
    let redisStore = connectRedis(session) ;
    session({
        secret : sessionConf.secret ,
        store : new redisStore({ client : new Redis.Cluster(redisUtil.getRedisConf(req)) , ttl: sessionConf.timeout , prefix : sessionConf.prefix }) ,
        saveUninitialized : false ,
        resave : false
    }) ;
    next() ;
} ;