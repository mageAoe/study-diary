<template>
    <div class="login">
       <div class="login-center">
           <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
           <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
           <Button type="primary" @click="log">登录</Button>
       </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data(){
           return {
               username:'',
               password:''
           }
        },
        mounted() {
            //console.log(this)
        },
        methods:{
            ...mapActions([
                'login'
            ]),
            log(){
            this.login({username:'sun',athu:'http://yeweiyan.top/img/head.jpg'})
            
            this.$router.push('/')  


                // this.$store.commit('muser',{username:'sun',athu:'http://yeweiyan.top/img/head.jpg'})
                // //console.log(this.$store)
                // this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
 .login{
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .login .login-center  {
     width: 300px;
     height: 300px;
     color: black;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 20px;
     border: 1px solid black;
 }
 .login .ivu-input-wrapper{
       margin-top: 20px;
 }
</style>