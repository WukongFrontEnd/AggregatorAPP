/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> application -> controllers -> renderer.js
3. 作者：zhaohuagang@lifang.com
4. 备注：renderer类型的controller应用基类，她继承于system/core/controllers/renderer.js
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载配置及工具
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import SystemRendererControllerBasic from "../../system/core/controllers/renderer" ;
import config from "../../system/libraries/config" ;
import UrlParser from "../../system/libraries/urlParser" ;
import appConf from "../configs/app" ;
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
创建一个渲染器实例
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class AppRendererControllerBasic extends SystemRendererControllerBasic {
    constructor(req, res, next) {
        super(req, res, next) ;
        let up = new UrlParser(req.originalUrl) ;
        let MCCombined = up.getMCCombined() ;
        Object.assign(this.templateData, {
            "appType" : appConf.appType ,
            "version" : appConf.version ,
            "title" : "" ,
            "keywords" : "" ,
            "description" : "" ,
            "appStaticPrefix" : config.getStaticPrefix("app") ,
            "utilStaticPrefix" : config.getStaticPrefix("util") ,
            "extraStylesheets" : [] ,
            "matchStylesheet" : MCCombined ,
            "extraJavascripts" : [] ,
            "matchJavascript" : MCCombined
        }) ;        
    }    
}
/*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
最后将render暴露出去
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
export default AppRendererControllerBasic ;
