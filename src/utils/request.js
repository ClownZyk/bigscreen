import Axio from 'axios'

const request = Axio.create({
  baseURL: process.env.VUE_APP_PROXY,
  transformResponse: [
    data => {
      return data
    }
  ],
  timeout: 50000
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  res => {
    const data = JSON.parse(res.data)
    return Promise.resolve(data)
  },
  error => {
    console.log('err' + error)
    let { message } = error
    if (message === 'Network Error') {
      message = '网络连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    // confirm(message)
    return Promise.reject(error)
  }
)

export default request
