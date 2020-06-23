import Vue from 'vue'
import Router from 'vue-router'
import home from '@/sreen/home'
import admin from '@/sreen/admin'
import club from '@/sreen/club'
import meage from '@/sreen/meage'
import homeSelect from '@/sreen/homeSelect'

import tab from '@/sreen/tab'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
     {
        path:'/',
        component:tab,
        redirect:'/home',
        children:[
          {
            path:'/home',
            component:home
          },
          {
            path:'/admin',
            name:'admin',
            component:admin
          },
          {
            path:'/club',
            name:'club',
            component:club
          },
          {
            path:'/meage',
            name:'meage',
            component:meage
          },
          {
            path:'/home/homeSelect/:id',
            name:'homeSelect',
            component: homeSelect
          }
        ]
     }
  ]
})
