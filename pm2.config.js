module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name : "AggregatorJS_dev" ,
      script : "bin/www" ,
      env : {
        STAGE_ENV : "dev" ,
        PORT : 9080
      } ,
      watch : true ,
      cwd : "." ,
      instances : "1" ,
      exec_mode : "cluster"
    } ,
    {
      name : "AggregatorJS_test" ,
      script : "bin/www" ,
      env : {
        STAGE_ENV : "test" ,
        PORT : 9080
      },
      cwd : "." ,
      instances : "max" ,
      exec_mode : "cluster"
    } ,
    {
      name : "AggregatorJS_sim" ,
      script : "bin/www",
      env : {
        STAGE_ENV : "sim" ,
        PORT : 9080
      } ,
      cwd : "." ,
      instances : "max" ,
      exec_mode : "cluster"
    } ,
    {
      name : "AggregatorJS_prod" ,
      script : "bin/www" ,
      env : {
        STAGE_ENV : "prod" ,
        PORT : 9080
      } ,
      cwd : "." ,
      instances : "max" ,
      exec_mode : "cluster"
    }
  ]
}
