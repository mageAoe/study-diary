<template>
    <div class="page">
        <Content  class="login">
            <Form>
               </FormItem>
                <Input class="input" placeholder="username" v-model="form.username">
                    <span slot="prepend">
                        <Icon type="ios-contact" size='22' />
                    </span>
                </Input>
               </FormItem>
                <Input class="input" type="password" placeholder="password" v-model="form.password">
                    <span slot="prepend">
                        <Icon type="ios-sad" size='22'/>
                    </span>
                </Input>
                
                <Row>
                    <Col span="12">
                    <Input class="input" placeholder="验证码" v-model="form.virfy" style="width='200px'">
                    </Input>
                    </Col>
                    <Col span="12">
                      <img :src="Verification" @click = 'Verifi'>
                    </Col>
                </Row>
                
               <div class="info">
                    <Button type="info" ghost  long @click='login'>login in</Button>
                </div>
            </Form>
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
                  password:'',
                  virfy:''
             },
             Verification:'/api/Verification.gif'
          }  
        },
        methods:{
            Verifi(e){
                const uu = '/api/Verification.gif?'
                //可以使用 随机数 但是比较好性能
                this.Verification = uu + e.timeStamp
            },
            login(e){
                //跨域 用代理问题解决   '/api?a=100' 可以将{a=‘100’}传到后台 
                //get参数 （path，params{需要连接到path就免的值，只能是get}）
               axios.post('/api/login?',this.form
            //    {
            //       params:
            //         //   username:this.username,
            //         //   password:this.password
            //    }
               ).then(res=>{
                   //this.$route  //存的路径
                   //this.$router  //存的方法
                   //console.log(res)
                   //commit ，第一是提交mutations里的方法，第二参数是携带数据
                   this.$store.commit('changeUser',res.data[0])
                  if(res.data){
                      this.$router.push('/')
                  }
               }).catch(err=>{
                   console.log('111')
                   this.Verifi(e)
                   console.log(err.response)
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
       background: rgba(0, 0, 0, 0.1);
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