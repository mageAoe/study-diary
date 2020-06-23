<template>
      <Sider>
            <Menu  theme="dark" width="auto" >
                <MenuItem name="1-1" >
                    <Icon type="ios-navigate"  :size = 'size' @click="contentone"></Icon>
                    <span v-if="!ispage">Option 1</span>
                </MenuItem>
                <MenuItem name="1-2" >
                    <Icon type="ios-search" :size = 'size' @click="contenttwo"></Icon>
                    <span v-if="!ispage">Option 2</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="ios-settings" :size = 'size'></Icon>
                    <span v-if="!ispage">Option 3</span>
                </MenuItem>
            </Menu>
        </Sider>
</template>

<script>
    export default {
        props:['ispage'],
        data(){
            return{
                size:''
            }
        },
        watch:{
            ispage(val){
               if(val){
                  this.size = 36
                  //console.log(val)
               }else{
                   this.size = ''
               }
            }
        },
        computed:{
            ifsize(){
                if(this.ispage){
                    this.size = ''
                }else{
                    this.size = 36
                }
            },
        },
        methods:{
           contentone(){
               //console.log(this.$router)
               this.$router.push('/')
            },
            contenttwo(){
                this.$router.push('/content/contenttwo')
            }
        },
        mounted() {
            //console.log(this.$refs.side1)
        },
    }
</script>

<style scoped>
   .page .ivu-layout-sider{
      height: 100%;
  }
  .ivu-menu-item{
      padding: 20px;
  }
</style>