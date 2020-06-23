// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import museUi from 'muse-ui'

Vue.use(museUi)

import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css

import Loading from 'muse-ui-loading';
Vue.use(Loading);




Vue.config.productionTip = false

import page from './page'
Vue.use(page)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
