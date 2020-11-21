import Vue from 'vue'
import VueRouter from 'vue-router'

import UserLayout from '@/_user/layout/Layout.vue';
import UserHome from '@/_user/views/Home.vue';

import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: UserLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: UserHome,
      },
      {
        path: '/registro',
        name: 'Register',
        component: () => import('../_user/views/Register.vue'),
      },
      {
        path: '/tienda',
        name: 'Shop',
        component: () => import('../_user/views/Shop.vue'),
      },
      {
        path: '/producto/:id',
        name: 'Product',
        component: () => import('../_user/views/Product.vue'),
      },
      {
        path: '/post',
        name: 'Post',
        component: () => import('../_user/views/Post.vue'),
      },
      {
        path: '/carrito',
        name: 'Cart',
        component: () => import('../_user/views/Cart.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/deseados',
        name: 'Wishlist',
        component: () => import('../_user/views/Wishlist.vue'),
      },
      {
        path: '/suscripcion',
        name: 'Subscription',
        component: () => import('../_user/views/Subscription.vue'),

      },
      {
        path: '/cuenta',
        name: 'Account',
        component: () => import('../_user/views/Account.vue'),
      },
      {
        path: '/quienes-somos',
        name: 'AboutUs',
        component: () => import('../_user/views/AboutUs.vue'),
      },
      {
        path: '/preguntas-frecuentes',
        name: 'FAQ',
        component: () => import('../_user/views/FAQ.vue'),
      },
      {
        path: '/contacto',
        name: 'Contact',
        component: () => import('../_user/views/Contact.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../_admin/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    store.commit("loginHelper", { require: true, next: to.fullPath });
  } else {
    next();
  }
});

export default router
