<template>
  <div id="app">
    <Button color='red'>按钮</Button>
  </div>
</template>

<script>
import Button from './components/HelloWorld'


//export default 是导出模块，与 module.exports类似
// module.exports = {

// }
export default {
  name: 'App',
  //用来创建局部组建的
  components: {
    Button,

  }
}
</script>

<style>
   #app button{
     width: 200px;
     height: 200px;
     background: rgba(0,0,0, 0.5);
     border-radius: 5px;
     
   }

</style>
