
//webpack是运行在 none里的  es6不支持
const path = require('path')
//vue-loader  还需要一个 VueloaderPlugin 
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

     entry:{
         app:'./src/main.js',
        index: './src/index.js'
     },//程序打包的入口

     output:{ //打包好的文件怎么输入
        path:path.resolve('dist'),//配置输出的具体目录
        filename: '[name].js', //定义好打包的文件名称  name是根据key开生成名称的
        library:'sun',  //暴露全局变量
        libraryTarget:'umd' //定义通用模块

     },
     module:{  //模块处理器
        rules:[ //模块处理的规则
            { //js的方法
                test: /\.js/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.css$/, //正则表达式
                loader:['style-loader','css-loader']  //当webpack发现有后缀名称为css的道路模块时

            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader'],
                include:[], //需要
                exclude:[] //不需要
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]

     },
     resolve:{
     
        extensions: ['.vue','.js','.css','.less'], //自动匹配文件后缀
        alias:{  //路径别名
            'vue':'vue/dist/vue.esm'
        }
     },
     devServer:{  //webpack-dev-server 服务器
        contentBase: path.resolve('dist'),  //生成后文件所在目录
        compress: true, //gzip压缩
        port:3000, //配置端口号
        index: 'index.html', //http服务默认加载的html文件
        open:true  //在webpack-dev-server打开时自动打开浏览器

     },

     plugins:[  //这是一个数组 可以使用插件
         new VueLoaderPlugin(),
         new HtmlWebpackPlugin({  //帮助电脑节省运行的，但是会加到内存中去
            //HtmlWebpackPlugin  使用这个可以不用生成文件， 直接可以使用
            template:path.resolve('dist','index.html')

         })
     ],

     mode:  'production'   //输出后的模式
}

//development  开发模式 保留注释跟控制台输出
//production 生产模式  不会保留任何注释   而且控制台输出也会被忽略
