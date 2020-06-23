import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//在Vuex还没有创建的时候，拿到localstorage的数据
const user = JSON.parse(localStorage.getItem('user'))||{username:null,pasword:null}


import users from './users'
import rule from './rule'



//1.创建一原始数据
export default new Vuex.Store({
    state:{ // 仓库的原始数据
         user,
         age: 20
    },
    getters:{ //方法  用来订阅数据变化的
        user(state){
           return state.user
        },
        age(state){
            return state.age
        } 
    },
    mutations:{//方法  用来修改store里的数据
         
        changeUser(state,playoad){
            //在mutation里的所有方法，都可以设置第二参数  用来重载要修改的参数
            state.user = playoad
            //同时吧登录的数据保存到 localstorage ,确保登录的数据能够保存起来
            localStorage.setItem('user',JSON.stringify(playoad))
        },
        loginout(state,playoad){
            state.user = {
                username:null,
                pasword:null
            }
            localStorage.removeItem('user')
        },
        age(state){

            state.age ++
        }
        
    },
    actions:{//方法
       //可以同时出发多个方法
    },
    modules:{
        
        rule,
        users
    } 

})


//vuex相当于在全局中混入一个store对象

//getters 只是用来订阅数据的，不能直接改变获取的数据

//mutaions 里的方法需要通过$store对象的commit方法来提交

//不管vuex使用了多少模块，所有的数据都在一个state里