import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/Home"
import Challenges from "./pages/Challenges"
import Playground from "./pages/Playground"
import Challenge from "./pages/Challenge"
import Tutorial from "./pages/Tutorial"


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/progress', component: Challenges },
    { path: '/challenge', component: Challenge },
    { path: '/playground', component: Playground },
    { path: '/tutorial', component: Tutorial },
  ]
})
