// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Login from './components/login'
import router from './router'
import axios from 'axios'
import store from './store'

// qrcode
import VueQrcode from '@xkeshi/vue-qrcode'
Vue.component('qrcode', VueQrcode)

import './assets/css/reset.css'
import './assets/css/public.css'
import '../static/browserify-entanmo-min'

Vue.prototype.$http = axios

Vue.config.productionTip = false

window.Bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, Login },
  // template: '<App/>',
  render(h) {
    return h(this.etmsecret ? 'app' : 'login')
  },
  data () {
    return {
      etmsecret: ''
    }
  },
  created () {
    this.etmsecret = localStorage.getItem('etmsecret') || sessionStorage.getItem('etmsecret')
  }
})
