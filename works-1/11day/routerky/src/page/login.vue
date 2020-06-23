<template>
    <div class="page">
        <Content  class="login">
            <template>
                <Input class="input" placeholder="fro" v-model="form.username">
                    <span slot="prepend">
                        <Icon type="ios-contact" size='22' />
                    </span>
                </Input>
                <Input class="input" placeholder="password" v-model="form.password">
                    <span slot="prepend">
                        <Icon type="ios-sad" size='22'/>
                    </span>
                </Input>
                <Input class="input" placeholder="验证码">

                </Input>
               <div class="info">
                    <Button type="info" ghost  long @click='login'>login in</Button>
                </div>
            </template>
              <router-link to='/register'>没有账号，去注册</router-link>
        </Content>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
          return {
             form:{
                 username:'',
                  password:''
             }
          }  
        },
        methods:{
            login(){
                //跨域 用代理问题解决   '/api?a=100' 可以将{a=‘100’}传到后台 
                //get参数 （path，params{需要连接到path就免的值，只能是get}）
               axios.get('/api?',{
                  params:this.form
                    //   username:this.username,
                    //   password:this.password

               }).then(res=>{
                   //this.$route  //存的路径
                   //this.$router  //存的方法
                  if(res.data){
                      //$router.push 用于路径跳转
                      //$router.back 原型方法用于返回前一个页面
                      //￥router.replace()  替换记录
                      this.$router.push('/')
                  }
               }).catch(err=>{
                   console.log(err)
               })
            
            },
            // login(){  //这是post方法
            //     axios.post('/api?',{
            //           username:'sun',
            //           password:'456'
            //    }).then(res=>{
            //        console.log(res)
            //    }).catch(err=>{
            //        console.log(err)
            //    })
            // }

            // axios({
            //     url: '/api',
            //     methods: 'get',
            //     params :{  //queryString 查询字符串

            //     },
            //     data:{ //post才能使用data

            //     },
            //     timeout: 1000, //请求超时时间
            //     responesType:'josn' //类型
            // })
        }
    }
</script>

<style scoped>
   .page .login{
       width: 400px;
       height: 100%;
       margin: 100px auto;
       background: rgba(0, 0, 0, 0.5);
       padding-top: 20px
   }
   .page .input{
       width: 300px;
       margin: 20px 50px;
       margin-top:20px;
   }
   .page .info{
       width: 300px;
       margin: 20px auto;
   }
</style>