import request from '@/utils/request'

export function GetPlatformAllDataStatistics(data = {}) {
  return request({
    url: '/api/PlatformDataApi/GetPlatformAllDataStatistics',
    method: 'post',
    data: data
  })
}

export function GetPlatformDataStatistics(data = {}) {
  return request({
    url: '/api/PlatformDataApi/GetPlatformDataStatistics',
    method: 'post',
    data: data
  })
}

// /api/PlatformDataApi/GetPlatformSalesDataStatistics
export function GetPlatformSalesDataStatistics(data = {}) {
  return request({
    url: '/api/PlatformDataApi/GetPlatformSalesDataStatistics',
    method: 'post',
    data: data
  })
}

// /api/PlatformDataApi/GetOrderFlowingRecords
export function GetOrderFlowingRecords(data = {}) {
  return request({
    url: '/api/PlatformDataApi/GetOrderFlowingRecords',
    method: 'post',
    data: data
  })
}

// /api/PlatformDataApi/GetPlatformUserData
export function GetPlatformUserData(data = {}) {
  return request({
    url: '/api/PlatformDataApi/GetPlatformUserData',
    method: 'post',
    data: data
  })
}

// /api/PlatformDataApi/GetSmallStoreList
export function GetSmallStoreList(data = {}) {
  return request({
    url: '/api/PlatformDataApi/GetSmallStoreList',
    method: 'post',
    data: data
  })
}
