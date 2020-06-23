<template>
  <div>
      {{name |UpperCase|fliterNumber|LowerCase}}
      {{name2|Name('孙')}}
  </div>
</template>

<script>
  export default {
    data(){
        return{
          name:'suan16546',
          name2:'孙超群'
        }
    },
    filters:{
    //过滤器filters
    UpperCase(value){
      //toUpperCase 原生转大写
      return value.toUpperCase()
    },
    fliterNumber(value){
      return value.replace(/\d/g,'')  
    }, 
    LowerCase(value){
      //toLowerCase小写
      return value.toLowerCase()
    },
    Name(value,name){
      console.log(name) //孙
    }
    }

  }
</script>

<style>

</style>