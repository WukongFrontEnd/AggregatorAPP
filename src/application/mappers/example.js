/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> application -> mapper -> example.js
3. 作者：zhaohuagang@lifang.com
4. 备注：一个mapper的范例
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载相关资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import objectMapper from "object-mapper" ;
//import logger from "../../system/libraries/logger" ;

let detailMap = {
    status : ["status", {
        key : "status-code" ,
        transform : function(value){
            let val = parseInt(value, 10) ;
            if(val === 1) return 200 ;
            else return 1001 ;
        }
    }] ,
    message : "msg",
    count : "count"
} ;

class ExampleMapper {
    constructor() {
    }

    static detail(src) {
        try {
            return objectMapper(src, detailMap) ;
        } 
        catch (error) {
            //logger.error(`Example Mapper==>detail:${error},src:${JSON.stringify(src)}`);
            return null ;
        }
    }
}

export default ExampleMapper ;