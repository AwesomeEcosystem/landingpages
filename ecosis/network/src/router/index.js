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
      component: () => import(/* webpackChunkName: "HomeStartUp" */ '../views/index.vue'),
    },
    {
        path: '/eco',
        name: 'Eco',
        component: () => import(/* webpackChunkName: "HomeShowcase" */ '../views/Eco.vue'),
    },
    {
        path: '/nomics',
        name: 'Nomics',
        component: () => import(/* webpackChunkName: "HomeSoftware" */ '../views/Nomics.vue'),
    },
    {
        path: '/shop',
        name: 'ecosis Shop',
        component: () => import(/* webpackChunkName: "HomeSoftware" */ '../views/ComingSoon.vue'),
    },
    // {
    //     path: '/blog-list-large-image',
    //     name: 'BlogListLargeImage',
    //     component: () => import(/* webpackChunkName: "BlogListLargeImage" */ '../views/blog/BlogListLargeImage.vue'),
    // },
    // {
    //     path: '/blog-details',
    //     name: 'BlogDetails',
    //     component: () => import(/* webpackChunkName: "BlogDetails" */ '../views/blog/BlogDetails.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      console.log(to)
      if (!to.hash.startsWith('#')) {
        return { top: 0 }
      };
    },
});

export default router;
