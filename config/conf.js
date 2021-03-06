if (process.env.NODE_ENV == 'development') { //开发环境
  module.exports =  {
    title: '领课学院',
    baseUrl: 'http://127.0.0.1:5840/'   //java项目接口地址
  }
}else if (process.env.NODE_ENV == 'testing') {  //测试环境
  module.exports =  {
    title: '领课学院',
    baseUrl: 'http://192.168.1.181:5840/apis'  //java项目接口地址
  }
}else { //默认生产环境
  module.exports =  {
    title: '领课学院',
    baseUrl: 'http://192.168.1.181:5840/'   //java项目接口地址
  }
}
