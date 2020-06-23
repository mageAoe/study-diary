Vue.component('Switcher',{

    //通过props，向html里面拿参数进来
    props:{
     values:Boolean
    },
    //用来监控外部值的变化
    watch:{
       values(v){
         this.value = v
       },
       //子传向父级用$emit 的方法，并且还需要input方法$emit('input',v)
       value(v){
         this.$emit('input',v)
         console.log(v)
       }

    },
    template:`
    
    <div class="Switcher" @click='value=!value' :class="{'btn-on':value}" >
       <div class='btn'></div>
    </div>
    `,
    data(){
        return{
            value:this.values
        }
    },
    beforeDestroy(){
        //只有当实例被销毁的时候回才回触发
       console.log('销毁之前')
     },
     destroyed(){
     
       console.log('销毁之后')
     }

})