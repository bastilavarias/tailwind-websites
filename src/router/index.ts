import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'manage',
        component: () => import('../views/Manage.vue'),
    },

    {
        path: '/bloomberg',
        name: 'bloomberg',
        component: () => import('../views/Bloomberg.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
