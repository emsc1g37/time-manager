import Vue from 'vue'
import App from './App.vue'

const BASE_URL = 'http://localhost:4000/api'

export default {
  BASE_URL: BASE_URL
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
