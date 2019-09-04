/**
 * 防抖函数
 * @param {*} fn
 * @param {*} delay
 * @param {*} immediate 立即执行
 * @description 使用场景：防止按钮多次提交，只执行最后提交的一次
 * 表单验证需要服务端验证，只执行一段连续的输入事件的最后一次，还有搜索联想词
 */
const debounce = (fn, delay, immediate) => {
  let timeout
  return function(...args) {
    let context = this
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) fn.apply(context, args)
    }, delay)
    callNow && fn.apply(context, args)
  }
}

const throttle = (fn, delay) => {
  let flag = false
  return function(...args) {
    if (!flag) return
    flag = true
    setTimeout(() => {
      fn.apply(this, args)
      flag = false
    }, delay)
  }
}

function objectFactory() {
  const obj = new Object()
  const Constructor = [].shift.call(arguments)

  obj.__proto__ = Constructor.prototype

  const ret = Constructor.apply(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}

const memento = func => {
  const cache = {}
  return function() {
    let key = arguments[0]
    return cache[key] || (cache[key] = func.apply(null, arguments))
  }
}

const deepClone = obj => {
  const isType = (obj, type) =>
    Object.prototype.toString.call(obj) === `[object ${type}]`
  if (obj === null || obj === undefined) return obj
  let basicTypes = ['number', 'string', 'boolean', 'symbol']
  if (!~basicTypes.indexOf(typeof obj)) return obj

  let target = {}
  let source = {}

  if (isType(obj, 'Array')) {
    for (let key in obj) {
      target[key] = obj[key]
    }
  }

  if (isType(obj, 'RegExp')) {
    let source = obj.source
  }
}
