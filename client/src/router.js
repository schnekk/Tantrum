import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Gamepage from './views/Gamepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Gamepage',
      component: Gamepage
    }
  ]
})

