import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import TrimesterDetails from './pages/TrimesterDetails.vue';

import * as VueRouter from "vue-router";
import AuthGuard from "./security/AuthGuard";

const routes = [
    {path: '/login', component: Login},
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: Dashboard},
    {path: '/trimester-details/:trimester/:year', name: 'trimesterDetails', component: TrimesterDetails}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let authGuard = AuthGuard
    if (to.path !== '/login' && !authGuard.isAuthenticated()) {
        next({path: '/login'})
    } else {
        next()
    }
})

export default router
