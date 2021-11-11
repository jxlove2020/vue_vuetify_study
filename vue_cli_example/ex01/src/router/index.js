import Vue from 'vue';
import VueRouter from 'vue-router';
import main_page from '../views/main_page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: main_page,
  },
  {
    path: '/main',
    name: 'main_page',
    component: main_page,
  },
  {
    path: '/sub',
    name: 'sub_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/sub_page.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
