import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/HomePage"
import Challenges from "./pages/ChallengesPage"
import Playground from "./pages/PlaygroundPage"
import Challenge from "./pages/ChallengePage"
import Tutorial from "./pages/TutorialPage"


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/progress', component: Challenges },
    { path: '/challenge', component: Challenge },
    { path: '/challenge/:id', component: Challenge },
    { path: '/playground', component: Playground },
    { path: '/tutorial', component: Tutorial },
  ]
})
