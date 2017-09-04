import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'

import Home from './components/home/Home.vue'
import Squad from './components/squad/Squad.vue'
import LeagueTable from './components/leagueTable/LeagueTable.vue'

import Scorecard from './components/scorecard/Scorcard.vue'
import ScorecardNew from './components/scorecard/ScorecardNew.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/squad',
      component: Squad
    },
    {
      path: '/league-table',
      component: LeagueTable
    },
    {
      path: '/scorecard',
      component: Scorecard
    },
    {
      path: '/scorecard/new',
      component: ScorecardNew
    }
  ]
})

export default router
