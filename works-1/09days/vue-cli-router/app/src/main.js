// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import page from './page'

Vue.config.productionTip = false


router.beforeEach((to,from,next)=>{
  // console.log(to)
  // console.log(from)
  // console.log(next)
  if(to.meta.auth){
      next('/login')
  }else{
    next()
  }
})


const a = new Promise((resolve,reject)=>{
    return setTimeout(()=>{
      resolve(200)
    },1000)
})

const b = new Promise((resolve,reject)=>{
  return setTimeout(()=>{
    resolve(300)
  },2000)
})

const c = function(){
  return new Promise((resolve,reject)=>{
    resolve(500)
  })
}

console.log(c)
// a.then(res=>{
//   console.log(res)
// })

Promise.all([a,b]).then(res=>{
  console.log(res)
})


Vue.use(page)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
