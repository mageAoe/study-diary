<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  width: 100vw;
  height: 100vh;
  
}
#app{
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
