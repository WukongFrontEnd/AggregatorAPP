/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> application -> controllers ->example -> apiProvider.js
3. 作者：zhaohuagang@lifang.com
4. 备注：一个api类型的controller范例
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载配置及工具
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import AppApiControllerBasic from "../api" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
创建一个渲染器实例
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class RestfulApi extends AppApiControllerBasic {
    constructor(req, res, next) {
        super(req, res, next) ;
        this.outputs() ;
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    输出数据
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    outputs() {       
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        扩展模板数据
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        Object.assign(this.jsonStr, { "status" : "200" , "message" : "终于搞成功了！" }) ;
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        渲染模板
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/    
        this.output() ; 
    }
}
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
最后将render暴露出去
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
export default RestfulApi ;