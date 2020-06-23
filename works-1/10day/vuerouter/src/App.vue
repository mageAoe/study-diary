<template>
  <div id="app">
    
    <!-- <a href="#/">AAAA</a>
    <a href="#/bb">bbbb</a> -->

    <router-link to="/">AAAA</router-link>
    <router-link to="/bb">bbbb</router-link>
    <!-- </router-link> 会自动在 hash  ， history切换 -->
    <router-view/>    
      <!--<router-view/>  路由切换容器  指定路由在哪个div里切换-->
      <home>
        <h1>我是个组件</h1>
      </home>
  </div>
</template>

<script>
//import Hell from './components/HelloWorld'
//import Test from '@/components/test'

import home from '@/ivew/home'

export default {
  name: 'App',
    components:{
      home
 //    Hell,
  //  Test
  }
  
}
</script>

<style>

</style>
