import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Money from '@/views/Money.vue'
import Statistics from '@/views/Statistics.vue'
import Notfound from '@/views/Notfound.vue'
import Labels from '@/views/Labels.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*',
        component: Notfound
    }
]

const router = new VueRouter({
    routes
})

export default router
