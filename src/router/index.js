import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignInPage',
      component: () => import('../views/SignInPage.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUpPage',
      component: () => import('../views/SignUpPage.vue')
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/forget-password',
      name: 'ForgetPasswordPage',
      component: () => import('../views/ForgetPasswordPage.vue')
    },
    {
      path: '/reset-password',
      name: 'ResetPasswordPage',
      component: () => import('../views/ResetPasswordPage.vue')
    },
    {
      path: '/new-password',
      name: 'NewPasswordPage',
      component: () => import('../views/NewPasswordPage.vue')
    }
  ]
})

export default router
