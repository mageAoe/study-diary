<template>
    <Layout class="page">
        <Form class="register" >
              <FormItem :error = 'formError.username' class="input">
                <Input  placeholder="username" @input="formError.username = ''" size="large" v-model="form.username">
                    <span slot="prepend">
                        <Icon type="ios-contact" size='22' />
                    </span>
                </Input>
             </FormItem>

             <FormItem :error='formError.password' class="input">
                <Input  placeholder="password" @input="formError.password = ''" size="large" v-model="form.password">
                    <span slot="prepend">
                        <Icon type="ios-sad" size='22'/>
                    </span>
                </Input>
              </FormItem >

            <FormItem :error='formError.phone' class="input">
                <Input  placeholder="phone" @input="formError.phone = ''"  size="large" v-model="form.phone">
                    <span slot="prepend">
                        <Icon type="md-phone-portrait" size='22'/>
                    </span>
                </Input>
                </FormItem >

                 <FormItem :error='formError.emali' class="input"  >
                <Input  type='email' placeholder="email" @input="formError.emali = ''" size="large" v-model="form.emali">
                    <span slot="prepend">
                       <Icon type="ios-mail" size='22'/>
                    </span>
                </Input>
                </FormItem >

               <Row>
                    <Col span="12">
                    <FormItem :error='formError.virfy' class="input">

                    <Input  placeholder="验证码" @input="formError.virfy = ''" v-model="form.virfy" style="width='200px'" >
                    </Input>

                    </FormItem>
                    </Col>

                    <Col span="12">
                      <img :src="Verification" @click = 'Verifi'>
                    </Col>
                </Row>


                <div class="success">
                    <Button type="success" ghost long  @click='register'>注册</Button>
                </div>
            
            <router-link to='/login'>已有账号，去登录</router-link>
        </Form>
    </Layout>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                Verification:'/api/Verification.gif',
                form:{
                    username:'',
                    password:'',
                    phone:'',
                    emali:'',
                    virfy:''
                },
                formError:{
                    username:'',
                    password:'',
                    phone:'',
                    emali:'',
                    virfy:''
                }
            }
        },
        methods:{
            Verifi(e){
                const uu = '/api/Verification.gif?'
                //可以使用 随机数 但是比较好性能
                this.Verification = uu + e.timeStamp
            },
            register(e){
                //console.log(this.form)
                axios.get('/api/register?',{
                    params:this.form
                }).then((res)=>{
                   console.log(res.data)
                   this.$router.push('/login')
                }).catch((err)=>{
                   this.Verifi(e) //错误自动刷新验证码
                   //this.formError = err.response.data.error
                   //console.log(err.response.data.error)
                   const errT = err.response.data.error;

                       Object.keys(errT).forEach(k=>{
                        
                        this.formError[k] = errT[k]
                       
                    })
                                    
                })
            }
        }
        
    }
    //scoped设置style的单作用域
</script>

<style scoped>
    .page .register{
       width: 400px;
       height: 100%;
       margin: 100px auto;
       background: rgba(0, 0, 0, 0.2);
       padding-top: 20px;
       font-size: 18px
   }
   .page .input{
       width: 300px;
       margin: 20px 50px;
   }
   .page .success{
        width: 300px;
       margin: 20px auto;
   }
</style>