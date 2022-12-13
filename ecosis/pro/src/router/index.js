import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/elements/404.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "HomeBranding" */ '../views/HomeAgency.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
