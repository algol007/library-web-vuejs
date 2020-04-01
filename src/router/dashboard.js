import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Main/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Auth/Register.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Main/Dashboard.vue'),
  },
  {
    path: '/book/1',
    name: 'Books',
    component: () => import('@/views/Main/Book.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
