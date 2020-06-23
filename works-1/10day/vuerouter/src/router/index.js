import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import aa from '@/ivew/aa'
import bb from '@/ivew/bb'
import Home from '@/ivew/home'
import NOtfined from '@/ivew/Notfined'

//使用vue.use创建插件
Vue.use(Router)


/**
 * Router(options{})
 * 1.mode 路由模式
 * 2.routes 【】路由匹配模式
 */

//导出一个router的对象
export default new Router({
    mode:'hash', //hash是默认的  history
    routes:[
      {
        path:'/',
        component: aa  //需要匹配的组建
      },
      {
        path:'/bb',
        component: bb,
        
        //redirect:'/', //重定向
        //在#/敲 bb就可以进行跳转
        children:[  //给当前页面配置子页面
            {
              //这个子路由要在 bb文件下做路由切换
              path:'/bb/id',
              component: Home,
              //alias:'/bb', //alias别名 要显示的

            }
        ]
      },
      {
        path:'/404',
        component: NOtfined
      },
      {
        path:'*', // *是通配符  前面的路由没有匹配到，就访问
        redirect:'/404'
      }

    ]
})
