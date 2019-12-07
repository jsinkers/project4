// 'use strict'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap'
//import '@mdi/font/css/materialdesignicons.css'
import 'vue-material-design-icons/styles.css'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// import Vue from "vue";
// import MenuIcon from "vue-material-design-icons"

// Vue.component('menu-icon', MenuIcon);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
