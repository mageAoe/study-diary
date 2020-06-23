
//在这里注册全局的组建


const globa = {

}

export default {
    install(Vue){
        Object.keys(globa).forEach(k=>{
            Vue.component(k,globa[k])
        })
    }
}

