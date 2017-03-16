/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> core -> libraries -> loader.js
3. 作者：zhaohuagang@lifang.com
4. 备注：系统核心模块 -> 工具库 -> 批量加载指定类型的资源并返回相应的hash表
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/

/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
加载资源
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import requireDirectory from "require-directory" ;
import path from "path" ;
import fs from "fs" ;
class Loader {
    /*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    加载指定路径的全部资源并返回hash对象
    @path : 从application | system开始写，比如：system/middlewares/global
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
    static load(sourcePath) {
        let distinationPath = path.join(__dirname, '..','..', sourcePath) ;        
        if (fs.existsSync(distinationPath)) {
            let files = fs.readdirSync(distinationPath) ;
            if (files && files.length)
                return requireDirectory(module, distinationPath) ;
        }
        return {} ;
    }
}

export default Loader ;