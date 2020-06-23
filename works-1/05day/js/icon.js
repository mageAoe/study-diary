

Vue.component('icon',{
    props:{
        type:{
            type:String
        },
        size:{
            type:null,
            default:'16'
        },
        color:{
            type:null
        }

    },
    template:`
      <span class="glyphicon"  
      :class='iconName' 
      aria-hidden="true"
      :style="{fontSize:size +'px',color}"
      ></span>
    `,
    computed:{
        iconName(){
            if(!this.type) return ;
            return 'glyphicon-'+ this.type
        }
    }

})
