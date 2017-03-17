/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> libraries -> apiDataFilter.js
3. 作者：zhaohuagang@lifang.com
4. 备注：请求api接口获取数据并进行过滤转换
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载相关资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import request from "request-promise" ;
import logger from "./logger" ;
import apiConf from "../../application/configs/api" ;
import loader from "./loader" ;
import _ from "lodash" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
创建ApiDataFilter类
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class ApiDataFilter {
    constructor() {

    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    请求数据
    @converter : Boolean | Object { "mapper" : "user" , "method" : "list" }
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    static async  request({ apiUrl , method = "get" , converter = false}) {
        let opts = {
            "uri" : apiUrl ,
            "json" : apiConf.json ,
            "timeout" : apiConf.timeout ,
            "encoding" : apiConf.encoding ,
            "headers" : {
                "content-type" : apiConf.contentType
            }  
        } ;
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        如果converter没有设置为false，就必定是一定对象格式，就需要取得转换器方法
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        if(converter) opts.transform = this.getConverter(converter) ;
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        搞正事
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        try {
            let result = method.toLowerCase() === "get" ? await request.get(opts) : await request.post(opts) ;
            return result ;
        }
        catch({ name , message }) {
            logger.error("[Failed to request " + apiUrl + "]======" + "name : " + name + " ; message : " + message) ;
            return { status : 0 , message : "Failed to request "+ apiUrl , data : null } ;
        }
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    获取数据转换器
    @converter : Object { "mapper" : "user" , "method" : "list" }
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    getConverter(converter) {
        let mappers = loader.load("application/mappers") ;
        if( ! _.isObject(converter)) return null ;
        if ( converter.mapper ==="undefined" || converter.method ==="undefined") return null ;
        return mappers[converter.mapper]["default"][converter.method] ;
    }
    
}

export default ApiDataFilter ;