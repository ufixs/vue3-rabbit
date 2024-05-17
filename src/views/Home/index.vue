<template>
  <div class="container">
    <!-- 分类 -->
    <HomeCategory :categoryList="categoryList" />
    <!-- 轮播图 -->
    <HomeBanner />
  </div>
  <!-- 新鲜好物 -->
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
  <!-- 产品列表 -->
  <HomeProduct />
</template>

<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import { storeToRefs } from 'pinia'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
const { categoryList } = storeToRefs(categoryStore)
</script>

<style scoped></style>
