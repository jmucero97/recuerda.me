import Vue from 'vue'
import App from './App.vue'
import * as VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);  // Add this

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
