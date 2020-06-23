
//不能使用es6导入导出
//创建一个webpack.config.js 文件
//项目内部安装webpack,不能跟项目重名
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    
    entry:'./src/index.js', //打包的文件
    output:{  //输出
        path:path.resolve('dist'), 
        //Path接口中resolve方法的作用相当于把当前路径当成父目录,而把参数中的路径当成子目录或是其中的文件,进行解析之后得到一个新路径
        filename:'bundle.js' //打包好的文件
    },
    module:{
       rules:[ //数组
           { //一个规则就是一个对象
               test:/\.css$/,
               use:['style-loader','css-loader']
           },
           {
              test:/\.less$/,
              use:['style-loader','css-loader','less-loader']
           },
           {
               test:/\.vue$/,
               use:['vue-loader']
           },
           { 
              test:/\.(jpg|gif|png)$/,
              //file-loader 也能解析图片在use里面是个{loader：'file-loader',options:{publicPath:'url'}}
              use:['url-loader']//url-loader 将图片解析成base64的字符
           }
       ]
    },
    //插件 plugins
    plugins:[new VueLoaderPlugin()],

    mode:'development'  //development  production
}



