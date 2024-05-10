import request from '@/utils/request'
const baseURL = process.env.VUE_APP_MAP_PROXY
const apikey = process.env.VUE_APP_MAP_APIKEY

export function GetDistrictData(data = {}) {
  return request({
    baseURL,
    url: '/v3/ip',
    method: 'get',
    params: {
      key: apikey,
      ...data
    }
  })
}

export function GetWeatherInfo(data = {}) {
  return request({
    baseURL,
    url: '/v3/weather/weatherInfo',
    method: 'get',
    params: {
      key: apikey,
      ...data
    }
  })
}
