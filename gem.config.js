const GEM_NAME = '诚钟亚后台管理系统'
const COPYRIGHT = 'Copyright © 诚钟亚科技 All Rights Reserved'
const APP_ROOT_CODE = '2014111018472517600000002930'
const HOST = process.env.VUE_APP_HOST
const BASE_URL = process.env.VUE_APP_PROXY
const Upload_URL = process.env.VUE_APP_PROXY
const PASSWORDREG = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
const EMPTY_TIME = '0001/01/01 00:00:00'
// const Upload_URL = 'http://192.168.1.13:8080/beidou-luhe-service'
export default {
  HOST,
  GEM_NAME,
  BASE_URL,
  Upload_URL,
  APP_ROOT_CODE,
  COPYRIGHT,
  PASSWORDREG,
  EMPTY_TIME
}
