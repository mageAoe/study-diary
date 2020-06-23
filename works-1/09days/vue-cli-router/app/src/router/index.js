import Vue from 'vue'
import Router from 'vue-router'
import login from '@/content/login'
import HelloWorld from '@/components/HelloWorld'
import register from '@/content/register'
import goods from '@/content/goods'
import admin from '@/content/admin'
import notfound from '@/content/notfound'
import goodsDetails from '@/content/goodsDetails'
import goodslist from '@/content/goodslist'
import goodstype from '@/content/goodstype'
import goodstypelist from '@/content/goodstypelist'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
      {
          path:'/register',
          name:'register',
          component:register
      },
      {
        path:'/admin',
        name:'admin',
        component:admin,
        meta:{
          auth:true
        }
    },
    {
        path:'/goodslist',
        component:goodslist
    },
    {
      path:'/goods',
      name:'goods',
      component:goods,
      redirect:'goods/index.html',
      //redirect:'/goodslist', //不用重定向还有另一种方法，就是配置他的 / 路径
      children:[
        {
          //访问index.html页面,得用重定向
          path:'index.html',
          //path:'/',
          component:goodslist
        },
      {
        path:':type', //绑定动态路由必须与router-link-to绑定的字符串相同
        component:goodstype,
        children:[
          {
            path:'/',
            component:goodstypelist
          },
          {
            path:':gooid',
            component:goodsDetails
          }
        ]
      }
    ]
    },
    {
      path:'/notfound',
      name:'notfound',
      component:notfound
    },
    {
      path:'/*',
      redirect:'/notfound'
    }
  ]
})
