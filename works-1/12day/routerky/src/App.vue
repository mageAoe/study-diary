<template>
  <div id="app">
     <Header class="header">
        <div>adim</div>
       <div v-if='$store.getters.user.username'>
         <span>欢迎您：{{$store.getters.user.username}} {{age}}</span>

         <Button type="info" @click="loginout">退出</Button>
       </div>
       <div v-else>
         <router-link to="/login">登陆</router-link>
       </div>
     </Header>

    <router-view/>
  </div>
</template>

<script>
//import hello from '@/components/HelloWorld'
//vuex辅助函数
import { mapState,mapGetters,mapMutations,mapActions} from 'vuex'
//mapState 和 mapGetters 都是属性 ，都混入到computed里
//mapMutations 和 mapActions 都是方法 ， 都混入到methods方法去



export default {
  name:'APP',
  template(){
      
  },
  mounted() {
      //console.log(mapGetters(['user']))
  },
  methods:{
     loginout(){
       this.$store.commit('loginout')
       this.$router.push('/login')
       //console.log(this.$router)
     },
  },
  computed:{
    ...mapGetters(['user','age'])
  }
  
}
</script>

<style>
  .header{
    
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    
  }
  html,body,#app{
    height: 100%
  }
</style>
