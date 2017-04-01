/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> application -> controllers ->example -> renderer.js
3. 作者：zhaohuagang@lifang.com
4. 备注：一个renderer类型的controller范例
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载配置及工具
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import AppRendererControllerBasic from "../renderer" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
创建一个渲染器实例
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class Renderer extends AppRendererControllerBasic {
    constructor(err , req, res, next) {
        super(req, res, next) ;
        this.renders(err) ;
    }
    /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    渲染页面
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    renders(err) {         
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        扩展模板数据
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        Object.assign(this.templateData, { "title" : "出错啦！" , "matchStylesheet" : false , "matchJavascript" : false , "error" : err , "message" : err.message }) ;
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        渲染模板
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/    
        this.render("exception/index") ; 
    }
}
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
最后将render暴露出去
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
export default Renderer ;