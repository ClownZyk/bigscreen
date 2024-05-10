const imgLoader = () => {
  const req = require.context('./assets', true, /\.png|\.jpg|\.jpeg$/)
  return req.keys().map(k => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.src = req(k)
      img.onload = () => {
        resolve(1)
      }
      img.onerror = () => {
        reject(2)
      }
    })
  })
}
const fontLoader = () => {
  return new Promise((resolve, reject) => {
    var cfFont = new FontFace('cf-font', 'url(https://jiaoyang.oss-cn-beijing.aliyuncs.com/2022/font/erya.ttf)')

    // 监听字体加载完成事件

    cfFont
      .load()
      .then(function(loadedFont) {
        reject(2)
      })
      .catch(function(error) {
        reject(2)
      })

    // 将字体添加到文档中
    document.fonts.add(cfFont)
  })
}

const load = () => {
  return Promise.allSettled([...imgLoader(), fontLoader()])
}

export default load
