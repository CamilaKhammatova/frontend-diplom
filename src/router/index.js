import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const checkPermissions = (to, from, next) => {
  if (localStorage.email) {
    next();
  } else {
    next({name: "login"});
  }
};

const routes = [
  {
    path: '/',
    name: 'main',
    beforeEnter: checkPermissions,
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    meta: {layout: 'main'},
    component: () => import('../views/Schedule.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
