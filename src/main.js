import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

import api from './network'
Vue.prototype.$api = api
Vue.config.productionTip = false
const { $cdn } = require('./config')
Vue.prototype.$cdn = $cdn
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
