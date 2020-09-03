import axios from 'axios'
const config = require('@/config')

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 15 * 1000 // 15s timeout
})

instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    const data = response.data
    if (data.resCode !== 0) {
      return Promise.reject(data) // 人为走catch代码
    }
    return response.data
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export function get(url, params) {
  return instance.get(url, {
    params: params
  })
}
export function post(url, params) {
  instance.defaults.headers.post['Content-Type'] = 'application/json'
  return instance.post(url, JSON.stringify(params))
}
