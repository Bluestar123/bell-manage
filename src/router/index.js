import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
    meta: {
      title: '管理'
    },
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
          title: '首页',
          icon: 'menu'
        },
        children: [
          {
            name: '1-1',
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
            meta: {
              title: '首页1-1',
              icon: 'menu'
            }
          }
        ]
      },
      {
        name: 'about',
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '关于'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
