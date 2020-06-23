
//
const globa = {

}

export default {
     install(Vue){
        Object.keys(globa).forEach(k=>{
            Vue.componet(k,globa[k])
        })
     }
}

