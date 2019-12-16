// 'use strict'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'popper.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'vue-cytoscape/dist/vue-cytoscape.css'

import 'bootstrap'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// mdi icons must come after cytoscape to avoid CSS issues
import VueCytoscape from 'vue-cytoscape'
import 'vue-material-design-icons/styles.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueCytoscape)
Vue.use(BootstrapVue)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  mounted() {
    if (!localStorage.challenges) {
      localStorage.challenges = JSON.stringify({data: []})
    } else {
      try {
        JSON.parse(localStorage.getItem('challenges'));
      } catch(e) {
        localStorage.removeItem('challenges');
        localStorage.challenges = JSON.stringify({data: []})
      }
    }
  }
}).$mount('#app')


