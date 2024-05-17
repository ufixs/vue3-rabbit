import httpInstance from '@/utils/http'

// 获取一级分类列表
export function loginAPI({ account, password }) {
  return httpInstance({
    method: 'POST',
    url: '/login',
    data: {
      account,
      password,
    },
  })
}
