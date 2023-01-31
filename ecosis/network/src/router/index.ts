import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import HomeView from '../views/index.vue';
import { nextTick } from 'vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView, meta: { title: 'ecosis Netowrk – Connecting the World' } },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import(/* webpackChunkName: "about-us" */ '../views/about-us.vue'),
        meta: { title: 'About Us | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import(/* webpackChunkName: "contact-us" */ '../views/contact-us.vue'),
        meta: { title: 'Contact Us | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/terms-conditions',
        name: 'terms-conditions',
        component: () => import(/* webpackChunkName: "terms-conditions" */ '../views/terms-conditions.vue'),
        meta: { title: 'Terms Conditions | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/privacy-policy.vue'),
        meta: { title: 'Privacy Policy | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/faq',
        name: 'FAQs',
        component: () => import(/* webpackChunkName: "FAQs" */ '../views/faq.vue'),
        meta: { title: 'FAQs | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/nomics',
        name: 'nomics',
        component: () => import(/* webpackChunkName: "nomics" */ '../views/nomics.vue'),
        meta: { title: 'Nomics | The Smart Contract platform interoperable with the real world' },
    },
    {
        path: '/modern-saas',
        name: 'modern-saas',
        component: () => import(/* webpackChunkName: "modern-saas" */ '../views/modern-saas.vue'),
        meta: { title: 'Modern SAAS | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/:catchAll(.*)',
        name: '404 | Plurk – Tailwind CSS Multipurpose Landing Templates',
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
        document.title = (to.meta.title || 'Plurk') as never;
    });
    store.toggleMainLoader(false);
});

export default router;
