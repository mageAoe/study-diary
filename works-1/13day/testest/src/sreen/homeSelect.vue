<template>
  <div class="sreen">
        <conten class="headers" title="动态详情">
         <black slot="left"></black>
          <mu-button color="primary" slot="right">
             菜单
               <mu-icon value="check_circle" right></mu-icon>
          </mu-button>
        </conten>

        <news  :data='data'/>
    </div>
</template>

<script>

//模拟从后台传数据

function axios(path){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                id:1,
                usersname:'小孙',
                upic:'https://himg.bdimg.com/sys/portrait/item/254de78e8b5fe5ad905fe698afe688916c43',
                utime:new Date(),
                car:'奥迪A5',
                content:'我的第一个app网页',
                photos:['https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg'],
                like:3,
                comment:10   
            })

        }, 3000);
    })
}

import news from '@/components/news'
    export default {
        components:{
            news
        },
        data(){
            return{
                data:{}
            }
        },
        created() {
           //这是用查询字符串的方法
           //this.data = this.$route.query
          console.log(this.$route)
          //配合路由去做数据传递
          // this.data = this.$route.params
           const loading = this.$loading({
                overlayColor: 'hsla(0,0%,100%,.9)',
                color:'red',
                 size: 60,
           })
           axios('/test',{id:this.$route.params.id})
           .then(res=>{
               //console.log(res)
               this.data =res
                loading.close();
           })

        },
    }
</script>

<style scoped>

</style>