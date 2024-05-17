<template>
  <!-- 吸顶 -->
  <LayoutFixed :categoryList="categoryList" />
  <!-- 顶部 -->
  <LayoutNav />
  <!-- 头部 -->
  <LayoutHeader :categoryList="categoryList" />
  <!-- 中心 -->
  <router-view></router-view>
  <!-- 底部 -->
  <LayoutFooter />
</template>

<script setup>
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import { onMounted } from 'vue'
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore()
// 从pinia中获取一级分类
const { categoryList } = storeToRefs(categoryStore);
// 生命周期
onMounted(() => categoryStore.getCategory())
</script>
