// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js' //vuex
import globa from './components/index.js'
import iview from 'iview'
// import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false

Vue.use(globa)
Vue.use(iview) //需要设置打包白名单


router.beforeEach((to,from,next)=>{  //  /^\/login(?:\/(?=$))?$/i
    //  console.log(to) //要去哪里  从 /来
    //  console.log(from) //来自哪里  要倒 /login  去
    if(to.meta.au){
         if(store.getters.guser.username){
            next()
         }else{
           next('/login')
         }
    }else{
      next()
    }

    if(to.meta.reqLog){
      //如果已经登录，就禁止再次登录
        if(store.getters.guser.username){
          router.back()
        }else{
          next()
        }
    }
})

//console.log(store)  

// var text = {username:'sun'}
// console.log(encodeURIComponent(JSON.stringify(text)))
// var a = encodeURIComponent(JSON.stringify(text))
// console.log(decodeURIComponent(a))


//console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //加入路由 router
  store, //加入 vuex 
  components: { App },
  template: '<App/>'
})
