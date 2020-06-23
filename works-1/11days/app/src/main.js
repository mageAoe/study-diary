// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import plugin from './plugin/plugin.js'
// import index from './components/index.js'
// import 'iview/dist/styles/iview.css';
// import iview from 'iview'

// Vue.use(iview)
// Vue.use(index)

Vue.config.productionTip = false

// Vue.use(plugin,1,2)

// Vue.use(plugin)

// Vue.useing = function(plugin,...ags){  //...ags就是接收到函数后面传递的剩余参数
//     //  console.log(ags)
//     plugin.install(Vue,...ags)
// }

// Vue.useing(plugin,1,2,3)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
