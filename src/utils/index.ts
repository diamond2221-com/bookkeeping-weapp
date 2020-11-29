import Taro from '@tarojs/taro'

export const encrypt = (param: { [key: string]: any }, isBig = true) => {
  const { body, ...querys } = param
  // console.log('querys', querys, 'body', body)
  const secret = 'saas'
  let paramsString = `${secret}`
  const queryArr = Object.keys(querys).sort()
  queryArr.forEach(item => {
    paramsString += `${item}${querys[item]}`
  })
  if (body && (Object.entries(body).length || Array.isArray(body))) {
    paramsString += `${JSON.stringify(body)}`
  }
  paramsString += secret
  // console.log(querys, queryArr, paramsString)
  paramsString = isBig ? md5(paramsString).toUpperCase() : md5(paramsString).toLowerCase()
  return paramsString
}

export function debounce(fn: Function, waitTime = 300) {
  let _timer: any = null
  return function (this: any, ...arg: any[]) {
    if (_timer) {
      clearTimeout(_timer)
    }
    _timer = setTimeout(fn.bind(this, ...arg), waitTime)
  }
}

export function throttle(fn: Function, gapTime = 1500) {
  let _lastTime: any = null

  // 返回新的函数
  return function (this: any, ...args: any[]) {
    const _nowTime = +new Date()

    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, args) // 将this和参数传给原函数

      _lastTime = _nowTime
    }
  }
}

let _systemInfo: Taro.getSystemInfoSync.Result | null = null
let _isXPhoneArea: boolean | null = null

/**
 * 获取系统信息
 */
export const getSystemInfo = () => {
  if (_systemInfo === null) {
    _systemInfo = Taro.getSystemInfoSync()
  }
  return _systemInfo
}

/**
 * 判断是否是 IphoneX、iPhone 11、iPhone 12 系列
 */
/*
情景一：safeArea 安全区的top 大于0
情景二：在ios 13中获取 model 包含苹果字眼，并且状态栏不小于 44 的情况
*/
export const isIphoneSafeArea = () => {
  if (_isXPhoneArea === null) {
    const { model = '', brand = '', statusBarHeight = 0, safeArea } = getSystemInfo()
    _isXPhoneArea = safeArea.top > 0 || (statusBarHeight >= 44 && (model.includes('iPhone') || brand.includes('Apple') || brand.includes('iPhone')))
  }
  return _isXPhoneArea
}
