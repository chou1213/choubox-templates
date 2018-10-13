import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: () =>
            import('@views/index')
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import('@views/login')
    }]
})
