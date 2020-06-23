
export default {
    namespaced:true, //添加命名空间
    state:{
        admin:['小孙','小草','小群']
    },
    getters:{
        admin(state){
            return state.admin
        }
    },
    mutations:{
        changAdmin(state,payload){
            state.admin = payload
        }
    },
    actions:{
        CHANG_ADMIN({commit},payload){
            commit('changAdmin',payload)
        }
    }

}