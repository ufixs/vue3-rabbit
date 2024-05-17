import httpInstance from '@/utils/http'

// 获取轮播图
export function getBannerAPI(params = {}) {
  // 首页默认为1，商品页默认为2
  const { distributionSite = '1' } = params
  return httpInstance({
    methos: 'get',
    url: '/home/banner',
    params: {
      distributionSite,
    },
  })
}

// 获取新鲜好物
export function getFindNewAPI() {
  return httpInstance({
    method: 'get',
    url: '/home/new',
  })
}

//获取人气推荐
export function getHotAPI() {
  return httpInstance({
    method: 'get',
    url: '/home/hot',
  })
}

// 获取所有商品模块
export function getGoodsAPI() {
  return httpInstance({
    method: 'get',
    url: '/home/goods',
  })
}
