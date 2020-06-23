
//vuex

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//注册vue插件

Vue.use(Vuex)

let  proxypath = ''

//console.log(process.env.NODE_ENV) development

if(process.env.NODE_ENV === 'development'){
    proxypath = '/api'
}



//解密
const user = JSON.parse(localStorage.getItem('user')) ||  {}

//JSON.parse(localStorage.getItem('user')) ||

//JSON.parse(window.decodeURIComponent(window.atob(localStorage.getItem('user'))))

//decodeURIComponent(window.atob(localStorage.getItem('user')))
export default new Vuex.Store({
    //原始数据，值
    state:{
       user:user,
       count: 0,
    },
    //下面的都是方法
    getters:{ //订阅数据的变化 ,只能获取数据，不能改变state的数据
       guser(state){
           return state.user
       },
       gcount(state){
         return state.count
       }
    } ,
    mutations:{  //修改的方法 只有两个参数，但是可以是[]{}
       muser(state,palyed){
           //state.user = 'chao',
           //state.count = 10;
           //console.log(state,palyed)
           state.user = palyed
           
           //sessionStorage 关闭浏览器自动删除
           //加密存储    也可以用escape加密
           localStorage.setItem('user',JSON.stringify(palyed))

           //window.btoa(window.encodeURIComponent(
       },
       logout(state){
        state.user = {}
        localStorage.removeItem('user')
    }
    },
    actions:{ //在vuex里面处理全部的请求
        auser({commit},{page,limt}){
            //console.log(page)
            return new Promise((resolve,reject)=>{
                axios.get(proxypath+'/data',{
                    params:{
                        page:page,
                        limt:limt
                    }
                }).then(res=>{
                    //console.log(res.data[0].total)
                    resolve(res.data)  
            }).catch(err=>{
                 reject(err)
            })
        })
    },
    login({commit},data){
         return new Promise((resolve,reject)=>{
            console.log(data)
            commit('muser',data)
         })
    }
  },
  modules:{ //可以混入更多的方法 
    //这是在页面中使用
     //import { createNamespacedHelpers } from 'vuex'
     //const { mapState, mapActions } = createNamespacedHelpers('这个里面有什么方法，就填写出来')
      users:{
        namespaced:true,
        state:{
            age:100
        },
        getters:{
            gage(state){
                return state.age
            }
        },
        mutations:{
            mage(state){
                state.age = 20
            }
        }

      }
  }
})


