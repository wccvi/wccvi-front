import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Router from './routes.js'
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
