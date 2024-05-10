import request from '@/utils/request'
const baseURL = process.env.VUE_APP_WEATHER_PROXY
const apikey = process.env.VUE_APP_WEATHER_APIKEY

export function GetNowWeatherData(data = {}) {
  return request({
    baseURL,
    url: '/weather/v001/now',
    method: 'get',
    params: {
      key: apikey,
      output_type: 'json',
      ...data
    }
  })
}

export function GetPoiData(data = {}) {
  return request({
    baseURL,
    url: '/function/v001/poi',
    method: 'get',
    params: {
      key: apikey,
      output_type: 'json',
      ...data
    }
  })
}
