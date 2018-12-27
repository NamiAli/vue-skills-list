import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router'

Vue.use(VeeValidate)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})





