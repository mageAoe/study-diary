<template>
    <div class="page">
        <Content  class="login">
            <template>
                <Input class="input" placeholder="username" size="large">
                    <span slot="prepend">
                        <Icon type="ios-contact" size='22' />
                    </span>
                </Input>

                <Input class="input" placeholder="password" size="large">
                    <span slot="prepend">
                        <Icon type="ios-sad" size='22'/>
                    </span>
                </Input>

                <Input class="input" placeholder="phone" size="large">
                    <span slot="prepend">
                        <Icon type="md-phone-portrait" size='22'/>
                    </span>
                </Input>

                <Input class="input" placeholder="emali" size="large">
                    <span slot="prepend">
                       <Icon type="ios-mail" size='22'/>
                    </span>
                </Input>

                <Input class="input" placeholder="验证码">

                </Input>
                <div class="success">
                    <Button type="success" ghost long >注册</Button>
                </div>
            </template>
            <router-link to='/login'>已有账号，去登录</router-link>
        </Content>
    </div>
</template>

<script>
    export default {
        
    }
    //scoped设置style的单作用域
</script>

<style scoped>
    .page .login{
       width: 400px;
       height: 100%;
       margin: 100px auto;
       background: rgba(0, 0, 0, 0.5);
       padding-top: 20px;
       font-size: 18px
   }
   .page .input{
       width: 300px;
       margin: 20px 50px;
       margin-top:20px;
   }
   .page .success{
        width: 300px;
       margin: 20px auto;
   }
</style>