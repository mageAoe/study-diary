import Vue from 'vue' 
import Router from 'vue-router' //vue路由模块
import homePage from '@/page/home'
import userMeage from '@/page/um'
import administration from '@/page/Administration'
import loginPage from '@/page/login'
import registerPage from '@/page/register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'homePage', //给当前路由去一个名称
      component: homePage,
      meta:{ // 当前路由的元数据 自定义的
        reqHome :true //需要验证
      },
      redirect:'/us', //重定向
      children:[
        {
          path:'/us',
          name: 'userMeage',
          component: userMeage,
          meta:{ // 当前路由的元数据 自定义的
            reqHome :true //需要验证
          },
        },
        {
          path:'/admin',
          name: 'administration',
          component: administration,
          meta:{ // 当前路由的元数据 自定义的
            reqHome :true //需要验证
          },
        }
      ]
    },
    {
      path:'/login',
      name:'loginPage',
      component: loginPage,
      meta:{ // 当前路由的元数据 自定义的
          
        reqLogin :true //需要验证
      }
    },
    {
      path:'/register',
      name:'registerPage',
      component: registerPage
    }
  ]
})
