import { createRouter, createWebHistory } from 'vue-router'
//createRouter 创建路由实例
//createWebHistory 使用HTML5的历史记录模式


import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Layout from '../views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '', //默认子路由
          name: 'Home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login,
    },

  ],
})

export default router
