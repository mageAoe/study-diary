
export default {
    namespaced:true,
    state:{
        user:'xxx'
    },
    getters:{
        users(state){
            return state.user
        }

    },
    mutations:{
        changUser(state,payload){
            state.user = payload
        }
    },
    actions:{
        CHASNG_USERS({commit},payload){
            commit('changUser',payload)
        }
    }
}

