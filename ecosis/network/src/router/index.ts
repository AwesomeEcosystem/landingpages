import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import HomeView from '../views/index.vue';
import { nextTick } from 'vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView, meta: { title: 'ecosis Network- Streamline Smart Economies' } },
    {
        path: '/eco',
        name: 'eco',
        component: () => import(/* webpackChunkName: "about-us" */ '../views/eco.vue'),
        meta: { title: 'ecosis Network | Eco' },
    },
    {
        path: '/terms-conditions',
        name: 'terms-conditions',
        component: () => import(/* webpackChunkName: "terms-conditions" */ '../views/terms-conditions.vue'),
        meta: { title: 'ecosis Network | Terms of Use' },
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/privacy-policy.vue'),
        meta: { title: 'ecosis Network | Privacy Policy' },
    },
    {
        path: '/nomics',
        name: 'nomics',
        component: () => import(/* webpackChunkName: "nomics" */ '../views/nomics.vue'),
        meta: { title: 'ecosis Network | Nomics' },
    },
    {
        path: '/:catchAll(.*)',
        name: '404 | ecosis Network',
        component: () => import(/* webpackChunkName: "404" */ '../layouts/error.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash };
        }

        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from, next) => {
    const store = useAppStore();
    nextTick(() => {
        document.title = (to.meta.title || 'ecosis Network') as never;
    });
    store.toggleMainLoader(false);
});

export default router;
