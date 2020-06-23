 
/**
 * props:
 * default:
 * validator:方法  自定义验证
 * 
 * value:null 不验证类型
 */

Vue.component('Button',{
    props:{
        color: {
            type:String,
            //required:true, //显示参数是必须要传的
            default: 'defalut' //显示默认值   
        },
        size:{
            type:String,
            // validator(value){
            //     console.log(value)
            //     if(!(value === 'lg'||value === 'sm'||value==='xs')){
            //         console.error('not')
            //         return false  
            //     }
            //     return true
            // }
        }
    },
 
    template:  //<slot>  这个标签叫插槽  是可以让 newVue  里面的实例填写文字的
    `
    <button type="button" class="btn" :class="['btn-'+ color, {
        'btn-lg':size === 'lg',
        'btn-sm':size === 'sm',
        'btn-xs':size === 'xs'
    }]">
      <slot></slot>
    </button>
    `,
})
