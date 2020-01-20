import axios from 'axios'

let service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
  return config
},
(error) => {
  // 请求错误处理
  return Promise.reject(error)
}
)

// 添加响应拦截器
service.interceptors.response.use((response) => {
  let { data } = response
  return data
}, (error) => {
  return Promise.reject(error)
}
)

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default service
