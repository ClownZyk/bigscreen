export const getClosetBigInt = num => {
  const integerPartLength = Math.floor(Math.log10(num))
  return Math.ceil(num / Math.pow(10, integerPartLength)) * Math.pow(10, integerPartLength)
}

export const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    // 进入全屏模式
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      /* Firefox */
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      /* IE/Edge */
      document.documentElement.msRequestFullscreen()
    }
  } else {
    // 退出全屏模式
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari & Opera */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen()
    }
  }
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
