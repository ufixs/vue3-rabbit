import { useUserStore } from "@/stores/user"
import axios from "axios"
import router from '@/router'

// axios实例
const httpInstance = axios.create({
    baseURL:'/api',
    timeout:5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // 在发送请求之前做些什么
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  // 统一错误提示
  ElMessage.warning(e.response.data.message)

  // 401token失效处理
  if(e.response.status === 401){
    // 1.清除本地用户数据
    userStore.clearUserInfo()
    // 2.跳转到登录页
    router.replace('/login')
  }

  return Promise.reject(e)
})

export default httpInstance