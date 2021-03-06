import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Main/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      title: 'Library - The Best Library Platform Ever',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Auth/Register.vue'),
    meta: {
      title: 'Register',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/user/confirm',
    name: 'User Confirm',
    component: () => import('@/views/Auth/Confirm.vue'),
    props: true,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/Auth/Logout.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Main/Dashboard.vue'),
    props: true,
    meta: {
      title: 'Welcome to Library',
    },
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('@/views/Main/Dashboard.vue'),
    meta: {
      title: 'Welcome to Library',
    },
  },
  {
    path: '/book/loan/:user/:book',
    name: 'Loan Book',
    component: () => import('@/views/Main/LoanBook.vue'),
    meta: {
      title: 'Loan Book',
    },
  },
  {
    path: '/book/loan',
    name: 'Loan List',
    component: () => import('@/views/Main/Loan.vue'),
    meta: {
      title: 'Loan List',
    },
  },
  {
    path: '/book/history',
    name: 'History',
    component: () => import('@/views/Main/History.vue'),
    meta: {
      title: 'History',
    },
  },
  {
    path: '/book/return/:id',
    name: 'Return Book',
    component: () => import('@/views/Main/ReturnBook.vue'),
  },
  {
    path: '/book/:id',
    name: 'Book Detail',
    // props: true,
    component: () => import('@/views/Main/BookDetail.vue'),
    meta: {
      title: 'Book Detail',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
