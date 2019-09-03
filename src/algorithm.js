// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// 冒泡排序
function bubbleSort(arr) {
  console.time('冒泡排序')
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.timeEnd('冒泡排序')
  return arr
}

function bubbleSortEnhancement(arr) {
  console.time('冒泡排序增强版')
  let low = 0
  let high = arr.length - 1
  let i
  let temp
  while (low < high) {
    for (i = low; i < high; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
    high--

    for (i = high; i > low; i--) {
      if (arr[i] < arr[i - 1]) {
        temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
      }
    }
    low++
  }
  console.timeEnd('冒泡排序增强版')
  return arr
}

// 斐波那契数列
function fabonacci(num) {
  if (num === 1) return 0
  if (num === 2) return 1
  return fabonacci(num - 1) + fabonacci(num - 2)
}

// 阶乘
function factorial(num) {
  if (num === 1) return num
  return num * factorial(num - 1)
}

// 将数字转成货币形式
function toThousands(num) {
  var result = [],
    counter = 0
  num = (num || 0).toString().split('')
  for (var i = num.length - 1; i >= 0; i--) {
    counter++
    result.unshift(num[i])
    if (!(counter % 3) && i != 0) {
      result.unshift(',')
    }
  }
  return result.join('')
}
/**
 * @description 二分查找（前提条件是数组有序）
 * @author halapro.liu
 * @param {*} arr
 * @param {*} target
 * @returns
 */
function binarySearch(arr, target) {
  let max = arr.length - 1
  let min = 0
  while (min < max) {
    let mid = Math.floor((max + min) / 2)
    if (target < arr[mid]) {
      max = mid - 1
    } else if (target > arr[mid]) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
