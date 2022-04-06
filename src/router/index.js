import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    meta: { authenticatedLayout: true }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    meta: { authenticatedLayout: true }
  }
  ,
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { authenticatedLayout: true }
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: () => import('../views/SchedulesView.vue'),
    meta: { authenticatedLayout: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: { authenticatedLayout: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { authenticatedLayout: false }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    meta: { authenticatedLayout: false }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPasswordView.vue'),
    meta: { authenticatedLayout: false }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../views/ResetPasswordView.vue'),
    meta: { authenticatedLayout: false }
  },
  {
    name: 'NotFound',
    path: "/:catchAll(.*)", 
    component: () => import('../views/PageNotFoundView.vue'),
    meta: { authenticatedLayout: localStorage.getItem('user') }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticatedLayout)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('user')) {
      next()  
    } 
    else {
      next({ name: 'login' })
    }
  } else {
      if (localStorage.getItem('user')) {
          next({ name: 'home' })
        } 
      else {
          next() // go to wherever I'm going
        }
  }
})

export default router;
