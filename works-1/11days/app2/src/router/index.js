import Vue from 'vue'
import Router from 'vue-router'
import globa from '@/components/globa'
import login from '@/components/login'
import content from '@/components/page/content'
import contentone from '@/components/page/contentone'
import contenttwo from '@/components/page/contenttwo'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'globa',
      component: globa,
      redirect:'/content/contentone',
      meta:{
         au:true
      },
      children:[
        {
          path:'/content',
          component:content,
          alias: '/',
          redirect:'/content/contentone',
          children:[
            {
              path:'/content/contentone',
              component:contentone,
              meta:{
                au:true
             },
            },
            {
              path:'/content/contenttwo',
              component:contenttwo,
              meta:{
                au:true
             },
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:login,
      meta:{
        reqLog:true
      }
    }
    
  ]
})
