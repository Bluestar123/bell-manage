import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './styles/common.css'
import service from './api'

Vue.config.productionTip = false
Vue.prototype.$http = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
