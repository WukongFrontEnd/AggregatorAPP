/*++----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. 项目名称：AggregatorAPP (一个典型的Aggregator应用系统)
2. 文件名：src -> system -> libraries -> mail.js
3. 作者：zhaohuagang@lifang.com
4. 备注：系统工具库 -> 邮件发送类
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
import nodemailer from "nodemailer" ;
import mailConf from "../../application/configs/mail" ;
import logger from "./logger" ;
import _ from "lodash" ;

class Mail {
    constructor() {
        
    }
    static send({ to , cc = "" , subject , content , attachments = null , success , failed }) {
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        开启一个 SMTP 连接池
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        let transporter = nodemailer.createTransport(mailConf) ;
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        邮件选项
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        let opts = {
            "from" : mailConf.auth.user ,  //这里不能定制发件人地址，否者邮件发布出去
            "to" : to , 
            "cc" : cc ,        
            "subject" : subject ,         
            "html" : content ,
            "attachments" : attachments
        } ;
        /*++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        发送邮件
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------++*/
        transporter.sendMail(opts, (error, msg) => {
            if(error) {
                logger.error("[Failed to send mail ]======mail options : " + JSON.stringify(opts) + " ; mail config : " + JSON.stringify(mailConf) + " ; error : " + error ) ;       
                if (_.isFunction(failed)) failed(error) ;                             
            }
            else {
                if(_.isFunction(success)) success(msg) ;  
            }  
        }) ;
        
    }
}

export default Mail ;
