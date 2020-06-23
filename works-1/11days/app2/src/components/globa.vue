<template>
    <Layout class="page">
         <Siderleft  
            hide-trigger collapsible   :ispage = 'isCollapsed' v-model="isCollapsed"
            :style = "{width:style.width,minWidth:style.min_width,maxWidth:style.max_width,flex:style.flex}"
            >
            
         </Siderleft> 
        <!-- <Sider  hide-trigger collapsible  v-model="isCollapsed" >
          style="width: 64px; min-width: 64px; max-width: 64px; flex: 0 0 64px;"
          style="width: 200px; flex: 0 0 200px; min-width: 200px; max-width: 200px;"
        </Sider> -->
        <Layout>
          <Head>
              <div slot='left'>
                  <Icon @click.native="collapsedSider" :class="menuitemClasses"  :type="type" size="36"></Icon>
              </div>
              <div slot='right'>
                 <Avatar  :src= "guser.athu"/>
                  <span>欢迎
                      {{guser.username}}
                    <Button type="primary" v-if="!guser.username" @click="logins">登录</Button>   
                   </span>

                   <Dropdown trigger="click" v-if="guser.username">
                    <Button type="primary">
                         菜单
                        <Icon type="ios-arrow-down"></Icon>
                        
                    </Button>
                    <DropdownMenu slot="list">
                        <!-- <DropdownItem @click="securityout">全安退出</DropdownItem> -->
                        <li class="ivu-dropdown-item" @click="log_out">全安退出</li>
                        <!-- <DropdownItem>修改密码</DropdownItem> -->
                        <li class="ivu-dropdown-item" @click="securityout">修改密码</li>
                    </DropdownMenu>
                </Dropdown>
              </div>
          </Head>

          <Content></Content>

          <Footer>

          </Footer>

        </Layout>
    </Layout>
</template>

<script>
import Siderleft from './page/Sider'
import Head from './page/header'
import Content from './page/content'
import Footer from './page/footer'
import {mapGetters , mapMutations} from 'vuex'

//高仿vuex mapgetters
//   function mapgetters(arr){
//       const obj = {}
//       arr.forEach(k=>{
//           obj[k] = function(){
//               return this.$store.getters[k]
//           }
//       })
//       return obj
//   }

//  const ppp =  mapgetters(['c','b'])
//  console.log(ppp)
 
    export default { //http://yeweiyan.top/img/head.jpg  //md-close
        data(){
            return{
               style:{
                 width:'200px',
                 min_width:'200px',
                 max_width:'200px',
                 flex:'0 0 200px'
               },
               isCollapsed: false,
               type:'md-menu'
            }
        },
        components:{
            Siderleft,
            Head,
            Content,
            Footer
        },
        // watch:{
        //    'ather'(val){
        //        this.login.ather = this.$store.getters.guser[0]
        //    }
        // },
        computed: {
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            // ather(){
            //     return this.$store.getters.guser[0]
            // }
              

            //vuex的辅助函数，直接导出使用，而这个函数返回的值就是数据 是可以直接用到template模板上面的，而且
            //还能用来监听到vuex里面mutation函数所改变的state的原始值
            ...mapGetters([
                'guser'
            ])
        },
        // updated() {
        //     this.login.ather = this.$store.getters.guser[0]
        //      this.login.ahth =  this.$store.getters.guser[1]
        //      console.log(this)
        // },
        // created() {
        //      this.login.ather = this.$store.getters.guser[0]
        //      this.login.ahth =  this.$store.getters.guser[1]
        // },
        methods: {
            //vuex 辅助函数可以直接拿出来使用的，非常方便，还可以传参数，但是要在$store里面接收
            ...mapMutations([
                'logout'
            ]),
            log_out(){
               this.logout()
               this.$router.push('/login')
            },
            collapsedSider(){
                //console.log(this.$refs.side1)
                // this.$refs.side1.toggleCollapse();
                 if(this.type == 'md-menu'){
                     this.type = 'md-close'
                     this.isCollapsed = true;
                     this.style = {
                        width:'64px',
                        min_width:'64px',
                        max_width:'64px',
                        flex:'0 0 64px'
                     }
                 }else{
                     this.type = 'md-menu'
                     this.isCollapsed = false;
                     this.style = {
                        width:'200px',
                        min_width:'200px',
                        max_width:'200px',
                        flex:'0 0 200px'
                     }
                 }
                
            },
            securityout(){
                console.log(111)
                this.$store.commit('logout')
            },
            logins(){
                this.$router.push('/login')
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>
 .page{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 }

.ivu-layout{
    min-width: 1480px;
}
</style>