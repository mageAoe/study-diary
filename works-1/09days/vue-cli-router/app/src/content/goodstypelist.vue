<template>
    <div>
        <h1>商品类型</h1>
       <ul>
            <li v-for="(itme,index) in Array(5)"  :key="index">
                <router-link 
                    :to="'/goods/' + type + '/' + 'nz' + (index+1) + '.html' ">
                    男装{{(index+1)}}
                </router-link>
            </li>
         </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                type:''
            }
        },
        watch:{
            //路由在第一次加载的时候是检测不了路由的变化的
            $route({params}){
                //console.log(v)
                this.type = params.type
            }
        },
      created() {
          //第一次加载的路由数据需要通过 vue生命周期函数来获取
          //预加载
          const {type} = this.$route.params
          this.type = type
      },
    }
</script>

<style scoped>

</style>