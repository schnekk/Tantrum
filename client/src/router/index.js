import Vue from 'vue'
import VueRouter from 'vue-router'
//import Bar from './views/Bar'
//import Profile from './views/Profile'
//const Profile = () => import("./views/Bar.vue");
Vue.use(VueRouter)

/*const routes = [
  {
    path: '/',
    name: 'home',
    component: Bar
  },
  {
    path:'/profile',
    name:'profile',
    component: Profile
  } 
]*/

const routes = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default routes
