

//要使用vue必须导入vue
import Vue from 'vue/dist/vue.esm'
import app from './app.vue'


//直接导入css
import './style.css'
import './style.less'

new Vue({
  el:'#app',
  template:`<app />`,
  components:{
      app
  }
})

var a = 100;
console.log(a)


