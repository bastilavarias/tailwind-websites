import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'site-one',
        component: () => import('../views/SiteOne.vue'),
    },

    {
        path: '/site-two',
        name: 'site-two',
        component: () => import('../views/SiteTwo.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
