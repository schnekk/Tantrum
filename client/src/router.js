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
import Buttonforgetusername from './views/Buttonforgetusername'
import Homeuser from './views/Homeuser'
import Anthempage from './views/Anthempage'
import ASSpage from './views/ASSpage'
import Cyberpage from './views/Cyberpage'
import Deathpage from './views/Deathpage'
import GTApage from './views/GTApage'
import Reddeadpage from './views/Reddeadpage'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/monsterhunterinfo',
      name: 'info1',
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
    {
      path: '/forgetusername',
      name: 'forgetusername',
      component: Buttonforgetusername
    },
    {
      path: '/homeuser',
      name: 'homeuser',
      component: Homeuser
    },
    {
      path: '/antheminfo',
      name: 'info2',
      component: Anthempage
    },
    {
      path: '/assassininfo',
      name: 'info3',
      component: ASSpage
    },
    {
      path: '/cyberinfo',
      name: 'info4',
      component: Cyberpage
    },
    {
      path: '/deathinfo',
      name: 'info5',
      component: Deathpage
    },
    {
      path: '/gtainfo',
      name: 'info6',
      component: GTApage
    },
    {
      path: '/reddeadinfo',
      name: 'info7',
      component: Reddeadpage
    },
  ]
})

export default router

