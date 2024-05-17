// 封装banner轮播图相关业务代码
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
  // 获取轮播图
  const bannerList = ref([])
  const getBanner = async () => {
    try {
      const res = await getBannerAPI({
        distributionSite: '2',
      })
      if (res.code != 1) return ElMessage.error('获取轮播图失败')
      bannerList.value = res.result
    } catch (error) {
      console.log(error)
    }
  }
  onMounted(() => getBanner())

  return {
    bannerList,
  }
}
