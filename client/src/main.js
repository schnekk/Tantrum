import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

Vue.config.productionTip = false
Vue.prototype.$http = instance

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
