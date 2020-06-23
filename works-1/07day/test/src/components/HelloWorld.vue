<template>
        <button type="button" :style='{color:color}' class="btn">
          <slot />
        </button>
</template>

<script>
  
  export default {
      props:{
         color:String
      }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
