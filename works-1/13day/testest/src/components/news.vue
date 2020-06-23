<template>
    <div class="news" @click="$emit('click',$event)">
        <header>
            <mu-avatar class="mu-avatar">
                <img :src='data.upic'>
            </mu-avatar>
            <div class="title">
                <h4 :class="{'no-data': !data.usersname}">{{data.usersname}}</h4>
                <div>
                    <span class="title-time" :class="{'no-data': !data.utime}">{{data.utime}}</span>
                    <span class="tirt-car" :class="{'no-data': !data.car}">{{data.car}}</span>
                </div>
            </div>
        </header>
        <p :class="{'no-data': !data.content}">{{data.content}}</p>
        <div class="pic" :class="{'no-data': !data.photos}">
            <div class="photo" v-for="(item,index) in data.photos" :key="index">
                <img :src="item">
            </div>
             
        </div>

        <footer class="footer">
            <div>
              <i>{{data.like}}赞</i>
              <i>{{data.comment}}评论</i>
            </div>
             
              <div class="icon">
                   <mu-avatar color="gray" size='30px'>
                   </mu-avatar>
                   <mu-avatar color="teal" size='30px'>
                   </mu-avatar>
              </div>
        </footer>
    </div>
</template>

<script>

    
    export default {
        props:{
           data:Object
        },
        created() {
            
        },
    }
</script>

<style scoped>
.news{
    font-size: 15px;
}

.no-data{
    background:#ccc 
}
.news .mu-avatar{
    margin-left: 15px;
    margin-right: 15px;
}
.news header{
    height: 90px;
    display: flex;
    align-items: center;
}
.news .title{
    flex: 1;
    height: inherit;
    display: flex;
    flex-direction: column; /*上下*/
    justify-content: center;
    padding: 0;
}
.news .title h4{
    font-size: 24px;
    margin: 0;
    height: 40px;
 
}
.news p{
    height: 35px;
}

.news .pic{
    display: flex;
    padding: 0 5px;
    flex-wrap: wrap
}
.news .pic .photo{
    flex: 1;
    padding: 5px;
    
}
.news .pic .photo img{
    max-width: 223px;
}

.news .footer{
    height: 70px;
    background: #ccc;
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 18px;
    justify-content: space-between;
    margin: 5px 0;
}

.icon{
    display: flex;
    align-items: center;
}

</style>