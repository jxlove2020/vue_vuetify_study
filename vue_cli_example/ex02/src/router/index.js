import Vue from 'vue';
import VueRouter from 'vue-router';
// main_page 와 sub_page라는 컴포넌트 모듈 2개를 가져옴
import main_page from '@/components/main_page.vue';
import sub_page from '@/components/sub_page.vue';

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
    component: sub_page,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
