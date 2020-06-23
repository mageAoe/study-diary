// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//插件库ElemnetUl
import ElemnetUl from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//添加vue插件的
Vue.use(ElemnetUl)

console.log(ElemnetUl)
Vue.config.productionTip = false

//局部混入mixins
//全局混入  相当于全局对象或变量了，定义好的直接用就行

Vue.mixin({
  data(){
    return{
      num:1000000
    }
  }
})


//全局自定义指令
Vue.directive('uu',{
  bind(el,binding,vnode){
      
    //el.value 获取到元素中的值    binding.value就只绑定的值
    el.value = binding.value
    //原生addlistenter方法
    el.addEventListener('input',function(){
      
      //vnode虚拟domcontex方法修改变化   binding。expression是个方法
      vnode.context[binding.expression] = el.value
      console.log(binding.oldValue)

    })
    console.log(el)
    //console.log(binding)
    console.log(binding.value)

  },
  inserted(){

    //当改指令所在的元素已经绑定到dom了
  },
  update(el,binding){
     //当指令绑定的数据发生变化时就触发函数
    el.value = binding.value
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
