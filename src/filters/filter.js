export function addCommasToNumber(number) {
  if (!number && number !== 0) {
    return ''
  }
  // 将数字转换为字符串
  let strNumber = number.toString()

  // 判断是否有小数部分
  let decimalIndex = strNumber.indexOf('.')
  let decimalPart = ''
  if (decimalIndex !== -1) {
    decimalPart = strNumber.slice(decimalIndex)
    strNumber = strNumber.slice(0, decimalIndex)
  }

  // 正则表达式，匹配3个数字
  let regex = /\B(?=(\d{3})+(?!\d))/g

  // 在匹配的位置插入逗号
  strNumber = strNumber.replace(regex, ',')

  return strNumber + decimalPart
}

export function hidePhone(phone) {
  return phone ? phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : ''
}

export function formatDate(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (!time) return
  const date = new Date(time)
  const obj = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const value in obj) {
    const reg = new RegExp(`(${value})`)
    if (reg.test(fmt)) {
      const str = obj[value] + ''
      const result = reg.exec(fmt)
      const result1 = fmt.match(reg)
      fmt = fmt.replace(result[0], result[0].length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  str = str.toString()
  return str.padStart(2, '0')
}
