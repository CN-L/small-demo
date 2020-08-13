let ary = 0
if(ary) {
  // 因为 0 == fasle 0 == '' 因此无法进入
  console.log('进入')
} else {
  console.log('无法进入')
}
function compTo(num, fix) {
  // num为原数字，fix是保留的小数位12数
  let result = 0
  if (Number(num) && fix > 0) { // 简单的做个判断
    fix = +fix || 2 //类型转换
    num = num + '' //转字符串
    if (/e/.test(num)) { // 如果是包含e字符的数字直接返回
      result = num
    } else if (!/\./.test(num)) { // 如果没有小数点 加.00
      result = num + `.${Array(fix + 1).join('0')}`
    } else { // 如果有小数点
      num = num + `${Array(fix + 1).join('0')}`
      const reg = new RegExp(`-?\\d*\\.\\d{0,${fix}}`)
      console.log(reg, 'reg')
      const floorStr = reg.exec(num)[0]
        console.log(reg.exec(num))
      if (+floorStr >= +num) {
        result = floorStr
      } else {
        const floorNumber = (+floorStr * Math.pow(10, 10) + +`0.${Array(fix).join('0')}1` * Math.pow(10, 10)) / Math.pow(10, 10)
        console.log(floorNumber, 'floorNumber')
        const point = /\./.test(floorNumber + '') ? '' : '.'
        console.log(point, 'point')
        const floorStr2 = floorNumber + point + `${Array(fix + 1).join('0')}`
        result = reg.exec(floorStr2)[0]
      }
    }
  }
  return result
}
compTo(1.21, 2)
