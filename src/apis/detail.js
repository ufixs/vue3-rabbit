import httpInstance from '@/utils/http'

// 获取商品详情信息
export function getDetailAPI(id) {
  return httpInstance({
    method: 'get',
    url: '/goods',
    params: {
      id,
    },
  })
}

//获取热榜商品
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance({
    method: 'get',
    url: '/goods/hot',
    params: {
      id, // 商品id
      type, // 1代表24小时热销榜 2代表周热销榜
      limit, // 获取个数
    },
  })
}
