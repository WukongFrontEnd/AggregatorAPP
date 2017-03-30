|--bin
    |--www
|--dist (目录和src下基本一致，只不过缺少src目录下所有的非js文件) 
|--languages (语言配置文件目录)
|--node_modules
|--src
    |--application
        |--configs
            |--api.js
            |--app.js
            |--cors.js
            |--db.js
            |--log.js
            |--middleware.js
            |--redis.js
            |--session.js
            |--static.js
        |--controllers
            |--example
            |--api.js
            |--renderer.js
        |--mappers
        |--routers
        |--app.js
    |--system
        |--core
            |--bootstrap
                |--globalMiddlewares.js
                |--index.js
                |--routerRegister.js
                |--viewEngine.js
            |--controllers
                |--api.js
                |--renderer.js
        |--libraries
            |--apiDataFilter.js
            |--benchmark.js
            |--captcha.js
            |--config.js
            |--loader.js
            |--logger.js
            |--urlParser.js
            |--mail.js
        |--middlewares
            |--api
                |--cors.js
            |--global
                |--logger.js
                |--session.js
            |--renderer
|--views
    |--components
        |--head.ejs
        |--footer.ejs
    |--example
    |--error.ejs
|--.babelrc
|--.gitignore
|--package.json
|--pms.config.js
|--README.md


此版本功能概述：
1. 隔离了系统级和应用级代码；
2. 实现了使用gulp以及gulp-babel对代码进行压缩编译；
3. 增加了语言配置功能，同一套代码实现不同语言版本功能；
4. 配置更细腻；
5. apiDataFilter接口调用不通的时候自动发邮件给相应的负责人，避免接口出错而不知情
6. 系统工具包增加了基准测试、邮件发送、验证码模块，后面还将陆续增加常用模块
