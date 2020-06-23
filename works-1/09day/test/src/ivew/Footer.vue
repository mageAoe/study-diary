<template>
    <footer>
        <h1>尾巴{{num}}</h1>
        <input type="text" v-focus >

        <button v-en:click.stop="click" >按钮</button>
    </footer>
</template>

<script>
import test from '../mixins/test'

/**
 * 自定义指令的参数 是局部的
 * 1.el :就是指令所在的元素
 * 2.binding  
 * 3.vnode
 * 4.oldVnode
 */
    export default {
       mixins:[test], //混入
       directives:{ //自定义指令
          focus:{ // v-fouct
             //v-fouct绑定到元素组建上就会被触发
            bind(el,binding,oldVnode){
                //在这里指令还没有插入dom，还不能参与动态的效果
                
            },
            //当指令所在的元素被插入到dom时触发
            inserted(el,binding,oldVnode){
               el.focus()
            },
             update(el,binding,oldVnode){

             }
          },
          en:{
              bind(el,binding){
                
                //console.log(binding)
                if(binding.arg){
                    //binding.value四个函数 binding.arg四个事件 
                    el.addEventListener(binding.arg,(e)=>{
                         e = e || event
                       
                         if(binding.modifiers.stop){
                             e.stopPropagation();
                         }
                         binding.value(e)
                      
                         
                          
                    })
                }
              },
              inserted(){

              },
              updated() {
                  
              },
          },
          
       },
         methods:{
              click(){
                //console.log(this)
              }
          }
    }
</script>

<style>
   
</style>