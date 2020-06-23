<template>
    <header class="header">
        <ul>
            <a>{{title}}</a>
             <a>二</a>
              <a>三</a>
               <a>四</a>
                <a>{{age}}</a>
        </ul>
        <input type="text" v-uu='title'>
        <input type="text" v-model="title">
        <input type="text" v-uu='age'>
    </header>
</template>

<script>
    export default {
        watch:{
            //监听变化
           title(v){
               console.log('title'+v)
           }
          
        },
       data(){
           return{
               title:'demo',
               age:20
           }
       }
    }
</script>

<style>
   .header a{
       padding: 0 20px;
       background: pink;
   }
</style>
