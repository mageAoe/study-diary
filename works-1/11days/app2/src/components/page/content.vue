<template>
      <Layout class="content" breakpoint='sm'>
            <Content class="content-right">
                 <router-view></router-view>
                  
           </Content>
      </Layout>

</template>

<script>
    export default {
        data(){
            return {
                value:true
            }
        }
    }
</script>

<style scoped>
  .content{
      flex: 1;
  }
  .content .content-right{
      color: black;
      padding: 20px;
  }
  .content .content-bottom{
      padding: 20px;
  }
</style>