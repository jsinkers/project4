import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./pages/HomePage"
import ChallengesPage from "./pages/ChallengesPage"
import PlaygroundPage from "./pages/PlaygroundPage"
import ChallengePage from "./pages/ChallengePage"
import TutorialPage from "./pages/TutorialPage"


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/progress', component: ChallengesPage },
    { path: '/challenge', component: ChallengePage },
    { path: '/challenge/:id', component: ChallengePage },
    { path: '/playground', component: PlaygroundPage },
    { path: '/tutorial', component: TutorialPage },
  ]
})
