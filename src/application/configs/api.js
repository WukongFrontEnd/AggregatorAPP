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
    "providerMail" : "zhaohuagang@lifang.com;42547335@qq.com" ,  //当接口不通的时候发邮件给TA
    "prefix" : {
        "dev" : "http://10.0.18.79:8107/yfyk" ,
        "test" : "http://10.0.18.79:8107/yfyk" ,
        "sim" : "http://10.0.18.79:8107/yfyk" ,
        "prod" : "http://10.0.18.79:8107/yfyk" 
    } ,
    "suffix" : { //后缀代表接口去掉prefix的部分，这里可以是无限级的树状结构，根据自己的需要
        "example" : {
            "rent" : {
                "detail" : "getHouseRentDetailInfo.rest?agentId=0&houseId=1465045"
            }
        }
    }
} ;