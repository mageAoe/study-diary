
//导出全局
import conten from './conten'
import black from './black'

const componentses ={
    conten,
    black,
}


export default {

    install(Vue){
        
        //循环注册全局组件
        Object.keys(componentses).forEach(k=>{

            Vue.component(k,componentses[k])
        })
    }
}

