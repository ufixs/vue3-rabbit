// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          // 首页
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          // 一级分类
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          // 二级分类
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          // 商品详情页
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/views/Detail/index.vue'),
        },
      ],
    },
    {
      // 登录
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
