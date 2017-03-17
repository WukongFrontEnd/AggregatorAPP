/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> configs -> interface.js
3. 作者：zhaohuagang@lifang.com
4. 备注：由于很多应用只是把数据接口当做model层，而不是直接接触数据库，本文件提供数据接口配置
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
export default {
    "encoding" : "utf-8" ,
    "contentType" : "application/json" ,
    "json" : true ,
    "timeout" : 60 * 1000 ,  //超时请求时间，单位：毫秒
    "successCode" : 1 ,  //restfulAPI返回的状态码status多少代表成功
    "sessionExpireCode" : 1502 ,   //restfulAPI返回的状态码status多少代表session失效   
    "prefix" : {
        "dev" : "http://dev.hr.wkzf.com" ,
        "test" : "http://test.hr.wkzf.com" ,
        "sim" : "http://sim.hr.wkzf.com" ,
        "prod" : "http://hr.wkzf.com" 
    } ,
    "suffix" : { //后缀代表接口去掉prefix的部分，这里可以是无限级的树状结构，根据自己的需要
        "example" : {

        }
    }
} ;