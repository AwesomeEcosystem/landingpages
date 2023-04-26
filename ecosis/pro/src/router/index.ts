import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import HomeView from '../views/index.vue';
import { nextTick } from 'vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView, meta: { title: 'ecosis Pro - Tokenise in Minutes' } },

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
