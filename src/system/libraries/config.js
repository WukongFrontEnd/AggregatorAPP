/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> libraries -> config.js
3. 作者：zhaohuagang@lifang.com
4. 备注：对session的处理
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载配置目录下的相关模块
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import staticConf from "../../application/configs/static" ;
import apiConf from "../../application/configs/api" ;
import redisConf from "../../application/configs/redis" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 获取阶段环境全局变量，这个变量的设置方法：
进入命令行，set STAGE_ENV=dev 这样就将STAGE_ENV设置成了dev，可以有如下值：dev | test | sim | prod
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
let env = process.env.STAGE_ENV ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
创建config配置的类
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class Config {
    constructor() {

    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    获取静态资源路径的方法
    @category : util | app
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    static getStaticPrefix(category) {
        return staticConf["prefix"][env] + staticConf[category] ;
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    获取接口url的方法
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    static getApi(key) {
        return apiConf["prefix"][env] + "/" + apiConf[key] ;
    }   
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    获取redis配置
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    static getRedisConf() {
        let redisArray = redisConf[env] ;
        let redisConfArray = [] ;
        if (redisArray && redisArray.length) {
            for (let v of redisArray) {
                redisConfArray.push({
                    host : v.host ,
                    port : v.port
                }) ;
            }
        }
        return redisConfArray ;
    }
}

export default Config ;
