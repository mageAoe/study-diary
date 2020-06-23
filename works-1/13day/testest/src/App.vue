<template>
  <div id="app">
    <transition
     enter-active-class="animated fadeInLeft"
     leave-active-class="animated fadeOutLeft"
    >
       <router-view /> 
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch:{
    $route(to,from){
      //console.log(to)
    }
  }

}
</script>

<style>
 #app{
   width: 100vw;
   height: 100vh;
 }
 #app .sreen{
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   font-size: 24px;
 }

 
 #app .sreen .content{
   flex: 1;
   overflow: scroll;
 }
 .sreen .footer{
   height: 70px;
   background: pink
 }

</style>
