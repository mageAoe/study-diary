<template>
    <div>
       <h1>{{name|capitalize}}</h1>
       <!-- 
           在当前页面切换的就是当前的子路由
        -->
        <home></home>
       <router-view/>
       <home>
           <h1>dsfjidklgjhdgkldhjglkf;jghfl;</h1>
       </home>
    </div>
</template>

<script>
import home from '@/ivew/home'
    export default {
        components:{
            home
        },
        data(){
           return {
               name:'我是vue'
           }
        },
        mounted(){
            console.log(this)
        },
        computed:{
          
        },
        filters:{
            capitalize:function(value){
                console.log(value)
                return value.replace(/[\u4e00-\u9fa5]/g,'')
            }
        }
    }
</script>

<style>

</style>