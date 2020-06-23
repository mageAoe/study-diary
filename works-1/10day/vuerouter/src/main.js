// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //加载路由

Vue.config.productionTip = false
//import Test from '@/components/test'




//import tesJsx from './test'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  //template: '<Test :num="100" title="sdfds"/>',
  template:'<App/>'
  
  //render(createlement){

    //createlement这个是用来渲染组建的
    //console.log(createlement(App))   Vnode
    //createlement('组建或者html标签'，option={})
    //可以渲染一个html标签createlement('div','yigediv')
  //   return createlement(Test,{
  //      props:{  //给组建添加props传参
  //        num:100,
  //        title:'222'
  //      },
  //      on:{ //给组建监听事件
  //        click(){
  //          console.log(111)
  //        }
  //      },
  //      style:{
  //        background :'red'
  //      },
  //      domProps:{
  //         index:'xxx'
  //      },
  //      nativeOn:{
  //          //给元素添加原生的事件
  //      },
  //      class:'test'
  //   },'这是slot插槽里传参数')
  // }
})

// function mm(){
//   var a = {n:1}
//   var b = a
//   console.log(b)
//   a.x={n:2}
//   //a = a.x 
//    console.log(b.x)
//   // console.log(a.x)
//   // console.log(a)

// }
// mm()