
//这个是打包的入口文件
//将所有要打包的文件放到这个里面


//vue/dist/vue.esm 是用于在webpack的开发环境下使用的
import Vue from 'vue'

import App from './App.vue'

new Vue({
    el: '#app',
    template: `
        <App />
    `,
    components: { //注册
        App
    }
})
//使用css
/**
 * 需要安装：
 * css-loader
 * style-loader
 */
//import './assets/style.css'
//使用less
/**
 * 需要安装：
 * less
 * less-loader
 */
//import './assets/style.less'