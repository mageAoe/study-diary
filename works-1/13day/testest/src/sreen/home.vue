<template>
    <div class="sreen">
        <conten class="headers" title="小程序">

          <mu-button color="primary" slot="right">
             菜单
               <mu-icon value="check_circle" right></mu-icon>
          </mu-button>
        </conten>

        <div class="content" @scroll="scroll">
          <mu-carousel class="banner">
             <mu-carousel-item>
                  <img src="https://goss.veer.com/creative/vcg/veer/800water/xiaba-132408080.jpg">
             </mu-carousel-item>
              <mu-carousel-item>
                  <img src="https://goss.veer.com/creative/vcg/veer/800water/xiaba-132349565.jpg">
             </mu-carousel-item>
             <mu-carousel-item>
                  <img src="https://goss.veer.com/creative/vcg/veer/800water/xiaba-141423266.jpg">
             </mu-carousel-item>
          </mu-carousel>

           <news @click="newSlect(item)" v-for="item in datas" :key="item.id" :data='item'/>
      
        <div class="loader">
           <i>正在加载。。</i>
           <mu-circular-progress class="demo-circular-progress" :size="28"></mu-circular-progress>  
        </div>     
        </div>

     </div>
</template>

<script>
import BScroll from 'better-scroll'
import news from '../components/news'

function axios(){

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let pushdatas = []
      for(var i=0,l=5;i<l;i++){
        pushdatas.push({
          usersname:'小孙'+ i,
          upic:'https://himg.bdimg.com/sys/portrait/item/254de78e8b5fe5ad905fe698afe688916c43',
          utime:new Date(),
          car:'奥迪A5',
          content:'我的第一个app网页',
          photos:['https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg'],
          like:3,
          comment:10
        })
      }
      resolve(pushdatas)
    }, 2000);
  })
}

export default {
    data(){
     return {
        datas:[
          {
        id:1,
        usersname:'小孙',
        upic:'https://himg.bdimg.com/sys/portrait/item/254de78e8b5fe5ad905fe698afe688916c43',
        utime:new Date(),
        car:'奥迪A5',
        content:'我的第一个app网页',
        photos:['https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg'],
        like:3,
        comment:10   
        },
        {
        id:2,
        usersname:'小lan',
        upic:'https://himg.bdimg.com/sys/portrait/item/254de78e8b5fe5ad905fe698afe688916c43',
        utime:new Date(),
        car:'奥迪A5',
        content:'我的第一个app网页',
        photos:['https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg'],
        like:3,
        comment:10   
        },
        {
        id:3,
        usersname:'小cao',
        upic:'https://himg.bdimg.com/sys/portrait/item/254de78e8b5fe5ad905fe698afe688916c43',
        utime:new Date(),
        car:'奥迪A5',
        content:'我的第一个app网页',
        photos:['https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg'],
        like:3,
        comment:10   
        },
        {
        id:4,
        usersname:'小孙',
        upic:'https://himg.bdimg.com/sys/portrait/item/254de78e8b5fe5ad905fe698afe688916c43',
        utime:new Date(),
        car:'奥迪A5',
        content:'我的第一个app网页',
        photos:['https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg','https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/crop=131,0,1725,1081/sign=46b06eb2077b0208188665a15fe8c1e2/d009b3de9c82d158e4091fa68d0a19d8bc3e4219.jpg'],
        like:3,
        comment:10   
        }
        ],
        isloader:false
    }
},

methods:{
  scroll(ev){
     const target = ev.target
     //target.scrollHeight //滚动距离
     //target.clientHeight 显示器的高度
     //target.scrollTop  滚动条距离上面的距离
     console.log(target.scrollHeight,target.clientHeight + target.scrollTop)
     if(target.scrollHeight == target.clientHeight + target.scrollTop){
       this.isloader = true
       axios().then(res=>{
          this.datas.push(...res)
       })
     }
  },
  newSlect(item){
    //查询字符串
    //  this.$router.push({
    //    path:'/home/homeSelect',
    //    query:item
    //  })
    // console.log(item)

    //配合路由去坐数据传递
    this.$router.push({
      name:'homeSelect',
      params:{id:item.id}
    })
  }
},
components:{
   news
}


}
</script>

<style scoped>
 .content{
   padding: 0 5px;
 }
.content .banner{
  height: 320px
}
.content .loader{
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#ff88bb;
  display: none;
}
</style>