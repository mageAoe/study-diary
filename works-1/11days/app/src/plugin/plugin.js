
import eg from './index'
import test from './test'

const globa ={
    eg,
    test
}

export default (Vue)=>{
     
    //只能这样循环注册成全局组件了吗
    // Object.keys(globa).forEach(k=>{
    //     Vue.component(k,globa[k])
    // })

    // install(Vue){
    //     // console.log(arguments.length)
    //     Vue.component({
    //         "eg":eg
    //     })
    // }
    
}