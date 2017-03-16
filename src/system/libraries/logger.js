/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> libraries ->  logger.js
3. 作者：zhaohuagang@lifang.com
4. 备注：日志记录工具
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import path from "path" ;
import fs from "fs" ;
import log4js from "log4js" ;
import logConf from "../../application/configs/log" ;
import appConf from "../../application/configs/app" ;

let appName = appConf["name"] ;
let loggerInfo = log4js.getLogger('info') ;
let loggerError = log4js.getLogger('error') ;
let loggerWarn = log4js.getLogger('warn') ;

//创建log的目录
let appenders = logConf.appenders ;
if (appenders) {
    let baseDir = path.join(__dirname, "..", "..", "..", "..", "logs") ;
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir) ;
    }

    let logDir = path.join(__dirname, "..", "..", "..", "..", "logs", appName) ;
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir) ;
    }
    for (let a of appenders) {
        if (a.type && a.type == "dateFile") {
            let dir = path.join(__dirname, "..", "..", "..", a.filename) ;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir) ;
            }
        }
    }
}

//加载log4js的配置
log4js.configure(logConf) ;

/**
 * desc:logger工具类
 */
class LoggerUtil {
    constructor() {

    }  

    /**
     * desc:记录info
     * @param  {String} info
     */
    static info(info) {
        if (info) loggerInfo.info(info);
    }

    /**
     * desc:记录error
     * @param  {String} error
     */
    static error(error) {
        if (error) loggerError.error(error);
    }
    /**
     * desc:记录warning
     * @param  {String} warn
     */
    static warn(warn) {
        if (warn) loggerWarn.warn(warn);
    }
}

export default LoggerUtil;

