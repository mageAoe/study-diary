<template>
    <div @click='$emit("click")'>
       <ul>
           <li v-for="(item,index) in list"
           :key = 'index'
           >{{item}}</li>
       </ul>
    </div>
</template>

<script>
    export default {
        //vue里面的for循环需要  ：key = ‘index’绑定index值
        data(){
            return {
                list:[
                    'sun',
                    20
                ]

            }
        },
    //mounted生命周期函数 已经挂在实例
    /**
     * vm是你已经渲染出来的那个组建
     * ￥data  就是data选项
     * ￥props  参数
     * $root  根组建
     * ￥parent  
     * children 子组件
     * ￥watch  监听
     * ￥set  设置方法，值
     */

    mounted(){
     console.log(this.$root)
      },
        props:{
            title:{
                type:String,
                required:true //必填参数
            },
            num:{
                type:Number,
                required:true,
                //default: 默认值
            }
        }
    }
</script>

<style >

</style>