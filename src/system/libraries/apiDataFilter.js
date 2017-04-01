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
import Logger from "./logger" ;
import _ from "lodash" ;
import Mail from "./mail" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
ApiDataFilter类的定义
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class ApiDataFilter {
    constructor(app) {
        this.app = app ;   
        this.apiConf = this.app.locals.confs.api ;
        this.logger = new Logger(this.app) ;
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    请求数据
    @converter : Boolean | Object { "mapper" : "user" , "method" : "list" }
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    async  request({ apiPath , method = "get" , converter = false}) {
        let apiUrl = this.pathToUrl(apiPath) ;
        let opts = {
            "uri" : apiUrl ,
            "json" : this.apiConf.json ,
            "timeout" : this.apiConf.timeout ,
            "encoding" : this.apiConf.encoding ,
            "headers" : {
                "content-type" : this.apiConf.contentType
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
            this.logger.error("[Failed to request " + apiUrl + "]======" + "request options : " + JSON.stringify(opts) + " ; name : " + name + " ; message : " + message) ;
            /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
            如果设置了提醒相应的接口提供者就要发邮件
            -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/ 
            //this.remind({apiUrl}) ;
            /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
            最后还是要返回json串
            -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/ 
            return { status : 0 , message : "Failed to request "+ apiUrl , data : null } ;
        }        
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    获取数据转换器
    @converter : Object { "mapper" : "user" , "method" : "list" }
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    getConverter(converter) {            
        if( ! _.isObject(converter)) return null ;
        if ( converter.mapper ===undefined || converter.method === undefined) return null ;        
        return this.app.locals.mappers[converter.mapper][converter.method] ;
    }
     /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    如果接口不通，就给相关责任人发送提醒邮件
    @converter : Object { "mapper" : "user" , "method" : "list" }
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    remind({apiUrl}) {
        let mail = new Mail(this.app) ;
        if(this.apiConf.providerMail) {
            mail.send({
                "to" : this.apiConf.providerMail ,
                "subject" : "十万火急！您提供给Node层的接口出问题了！" ,
                "content" : "大兄弟，您负责的地址为" + apiUrl + "的接口请求不通了，麻烦赶紧排查一下，以免影响用户使用！"                    
            }) ;
        }
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    根据apiPath返回apiUrl
    @apiPath：从api配置中suffix往下层写如："example.rent.detail"
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    pathToUrl(apiPath) {
        let pathArray = apiPath.split(".") ;
        let prefix = this.apiConf.prefix[this.app.locals.stage_env] ;
        let suffix = this.apiConf.suffix ;
        for(let n = 0 ; n < pathArray.length ; n ++) {
            suffix = suffix[pathArray[n]] ;
        }
        if(suffix === "undefined") suffix = "" ;
        return prefix + "/" + suffix ;
    }

     /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    整个class定义结束
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
}

export default ApiDataFilter ;
