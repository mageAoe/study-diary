import Vue from 'vue' 
import Router from 'vue-router' //vue路由模块
import homePage from '@/page/home'
import loginPage from '@/page/login'
import registerPage from '@/page/register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'homePage', //给当前路由去一个名称
      component: homePage
    },
    {
      path:'/login',
      name:'loginPage',
      component: loginPage
    },
    {
      path:'/register',
      name:'registerPage',
      component: registerPage
    }
  ]
})
