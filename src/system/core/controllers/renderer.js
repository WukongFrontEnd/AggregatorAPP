/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> core -> controllers -> renderer.js
3. 作者：zhaohuagang@lifang.com
4. 备注：系统核心 -> renderer类型控制器基类
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
class SystemRendererControllerBasic {
    constructor(req, res, next) {
        this.req = req ;
        this.res = res ;
        this.next = next ;
        this.templateData = {} ;
    }
    /*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    用templateData渲染指定模板，模板路径从views下一层开始写
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    render(template) {
        this.res.render(template , this.templateData) ; 
    }
}

export default SystemRendererControllerBasic ;