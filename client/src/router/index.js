import Vue from 'vue'
import Router from 'vue-router'
import TagComponent from '@/components/TagComponent'
import HomeComponent from '@/components/HomeComponent'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/home',
            name: 'Home',
            component: HomeComponent
        },
        {
            path: '/tag',
            name: 'Tag',
            component: TagComponent
        }
    ]
})