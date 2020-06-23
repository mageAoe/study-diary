
import Vue from 'vue';
//注册所有的全局组件

import HelloWorld from '@/components/HelloWorld'

export default  {
    install(){
        Vue.component({
            HelloWorld
        })
    }

}