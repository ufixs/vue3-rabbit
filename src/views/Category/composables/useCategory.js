// 封装分类数据相关业务代码
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category'

export function useCategory() {
  // 获取路由参数
  const route = useRoute()
  // 获取二级分类
  const categoryData = ref({})
  const getCategory = async (id) => {
    try {
      const res = await getTopCategoryAPI(id)
      // console.log(res.result)
      categoryData.value = res.result
    } catch (error) {
      console.log(error)
    }
  }
  onMounted(() => {
    getCategory(route.params.id)
  })
  watch(route, () => getCategory(route.params.id))

  return {
    categoryData,
  }
}
