import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Gamepage from './views/Gamepage'
import Profile from './views/Profile'
import AdminCreateGame from './views/AdminCreateGame'
import AdminGamepage from './views/AdminGamepage'
import AdminHome from './views/AdminHome'
import Adminprofile from './views/Adminprofile'
import profileother from './views/profileother'
import Editreview from './views/Editreview'
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
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/admincreate',
      name: 'admincreate',
      component: AdminCreateGame
    },
    {
      path: '/admingame',
      name: 'admingame',
      component: AdminGamepage
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: AdminHome
    },
    {
      path: '/adminprofile',
      name: 'adminprofile',
      component: Adminprofile
    },
    {
      path: '/editreview',
      name: 'editreview',
      component: Editreview
    },
    {
      path: '/profileX',
      name: 'profilenother',
      component: profileother
    },
  ]
})

