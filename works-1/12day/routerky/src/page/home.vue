<template>
        <Layout class="content">
            <Layout >
            <Sider >
            <Menu theme="dark" @on-select='select' width='200px' active-name='/us' :open-names="['1']">
                <Submenu name="1"  open-names>
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="/admin" >文章管理 </MenuItem>
                    <MenuItem name="/us">评论管理 </MenuItem>
                    <MenuItem name="1-3">举报管理 </MenuItem>
                </Submenu>

                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户 </MenuItem>
                    <MenuItem name="2-2">活跃用户 </MenuItem>
                </Submenu>
            </Menu>
                </Sider>

                <Content>
                   <router-view/>
                </Content>
            </Layout>
              
            <Footer>Footer</Footer>
     </Layout>
</template>

<script>


import { mapMutations,mapGetters, createNamespacedHelpers} from 'vuex'

//获取命名空间里的参数
const rule  = createNamespacedHelpers('rule')
const users = createNamespacedHelpers('users')

console.log(rule)
    export default {
        mounted(){
            // console.log(this.$store)
        },
        methods:{  //这里的age直接可以拿出来使用
           //  ...mapMutations(['age']),
           select(name){
              this.$router.push(name)
           } 

        },
        computed:{
             ...rule.mapGetters(['admin']),
             ...users.mapGetters(['users'])
        }
        
    }
</script>

<style scoped>
   .content{
       height:100%
   }
   .content.sider{width: 200px;}
</style>