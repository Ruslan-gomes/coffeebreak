import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CoffeeApp from '../pages/CoffeeApp.vue'
import DesabafoApp from '../pages/DesabafoApp.vue'

const routes = [
    {
        path: '/',
        component:CoffeeApp
    },
    {
        path: '/desabafos',
        component:DesabafoApp
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;