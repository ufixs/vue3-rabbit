import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])

  // action 获取导航数据的方法
  const getCategory = async () => {
    try {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    } catch (error) {
      console.log(error)
    }
  }
  return {
    categoryList,
    getCategory,
  }
})
