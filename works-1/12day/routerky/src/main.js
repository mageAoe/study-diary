// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import store from './store'

Vue.use(iview)

//console.log(router)
Vue.config.productionTip = false


//路由守护 
 router.beforeEach((to,from,next)=>{
    //to 要去哪里
   //from  来自于哪里
   //next  放行 函数他是用来放行的

  // 如果为true ，就需要验证登录
  if(to.meta.reqHome){
     //vuex里的信息
     //确认时候登录保存数据了
    if(store.getters.user.username){
       next()
    }else{
      next('/login')
    }
}else{
    //不需要验证，就直接放行
 next()
}

//判断术后已经登录  如果登录就不能再去登录
 if(to.meta.reqLogin){
  if(store.getters.user.username){
     //如果已经登录，就返回到首页
    console.log(store.getters.user.username)
    router.back()
  }else{
     //如果未登录 就让他去登陆
    next()
  }
}

})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})

console.log(store)


// var arr = ['1','2','2','3','4','4']

// //新的数组去重方法
// function un(a){
//   return Array.from(new Set(arr))
// }
// console.log(un(arr))