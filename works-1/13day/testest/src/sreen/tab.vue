<template>
    <div class="tab">
       <div class="tabs">
           <router-view/>
       </div>


        <div class="tab-banner">
            <div class="tab-title "
            @click="click(0,'/home')"
            :class="{active:tabIndex ===0}"
            >
                <mu-button  icon slot="right">
                     <mu-icon size="36" value="home"></mu-icon>
                 </mu-button>
                 <span>首页</span>
            </div>
            <div class="tab-title"
             @click="click(1,'/admin')"
            :class="{active:tabIndex ===1}"
            >
                <mu-button  icon slot="right">
                     <mu-icon size="36" value="home"></mu-icon>
                 </mu-button>
                 <span>管理</span>
            </div>
            <div class="tab-title"
             @click="click(2,'/club')"
            :class="{active:tabIndex ===2}"
            >
                <mu-button  icon slot="right">
                    <mu-icon size="36" value="home"></mu-icon>
                 </mu-button>
                 <span>俱乐部</span>
            </div>
            <div class="tab-title"
             @click="click(3,'/meage')"
            :class="{active:tabIndex ===3}"
            >
                <mu-button  icon slot="right">
                     <mu-icon size="36" value="home"></mu-icon>
                 </mu-button>
                 <span>信息</span>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data(){
            return {
                tabIndex: 0
            }
        },
        methods:{
           click(index,route){
              this.tabIndex = index;
              this.$router.push(route)
           }
        }
    }
</script>

<style scoped>
 .tab{
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
 }
 .tab .tabs{
    flex: 1;
    overflow: scroll;
 }

.tab .tab-banner{  
    flex: 1/9;
    display: flex;
    justify-content:space-around;/**/
    align-items: center;/**/
    font-size: 18px;
    background: #e0e0e0;
    padding: 5px 0;

}

.tab-banner .active{
   color: pink;
}

.tab-banner .tab-title{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mu-button  {
    height: 40px;
}
</style>