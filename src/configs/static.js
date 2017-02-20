/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> configs -> static.js
3. 作者：tangxuyang@lifang.com
4. 备注：静态资源配置
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
module.exports = {
    "prefix": {
        "dev": "//dev01.fe.wkzf",
        "test": "//test01.fe.wkzf",
        "sim": "//sim01.fe.wkzf",
        "prod": "//cdn01.wkzf.com"
    },
    "util": "/fe_public_library",
    "app": "/financial2_fe",
    "pluginCss": {
        "wktable": [
            "/wkzf/js/util/jQuery.wktable/wktable.min.css"
        ],
        "select2": [
            "/wkzf/js/util/select2/4.0.1/dist/css/select2.min.css"
        ],
        "treeviewSelect": [
            "/wkzf/jssrc/treeViewSelect/css/treeviewSelect.min.css"
        ],
        "daterangepicker":[
            "/wkzf/js/util/daterangepicker/daterangepicker.css"
        ],
        "bootstrap-switch":[
            "/bootstrap/plugins/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css"
        ],
        "bootstrap-datepicker":[
            "/bootstrap/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
        ]
    },
    "pluginJs": {
        "select2": [
            "/wkzf/js/util/select2/4.0.1/dist/js/select2.min.js",
            "/wkzf/js/util/select2/4.0.1/dist/js/i18n/zh-CN.js"
        ],
        "moment":[
            "/wkzf/js/util/daterangepicker/moment.min.js"
        ],
        "daterangepicker":[
            "/wkzf/js/util/daterangepicker/daterangepicker.js"
        ],
        "bootstrap-switch":[
            "/bootstrap/plugins/bootstrap-switch/dist/js/bootstrap-switch.min.js"
        ],
        "bootstrap-datepicker":[
            "/bootstrap/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
            "/bootstrap/plugins/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js"
        ]
    }
} ;