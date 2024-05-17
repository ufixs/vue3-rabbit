import httpInstance from '@/utils/http'

// 获取二级分类列表
export function getTopCategoryAPI(id) {
  return httpInstance({
    method: 'get',
    url: '/category',
    params: {
      id,
    },
  })
}

// 获取二级分类列表数据
export function getCategoryFilterAPI(id) {
  return httpInstance({
    method: 'get',
    url: '/category/sub/filter',
    params: {
      id,
    },
  })
}

// 获取导航数据
export function getSubCategoryAPI(data) {
  return httpInstance({
    method: 'post',
    url: '/category/goods/temporary',
    data,
  })
}
