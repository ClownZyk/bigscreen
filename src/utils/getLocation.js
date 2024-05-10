const getLocaion = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      // 获取用户位置信息
      navigator.geolocation.getCurrentPosition(
        position => {
          // 获取经度和纬度
          var latitude = position.coords.latitude
          var longitude = position.coords.longitude
          resolve({
            latitude: latitude,
            longitude: longitude
          })
        },
        error => {
          reject(error)
        }
      )
    } else {
      reject('Geolocation is not supported by this browser.')
      // 如果浏览器不支持Geolocation API，则提示用户
      alert('Geolocation is not supported by this browser.')
    }
  })
}

export default getLocaion
