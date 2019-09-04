var class2type = {}
var toString = class2type.toString
var str =
  'String Number Boolean Symbol Null Object Array Date RegExp Function Error'
var arr = str.split(' ')
arr.forEach(function(name) {
  class2type['[object ' + name + ']'] = name.toLowerCase()
})

function type(obj) {
  if (obj === null) return obj + ''
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[toString.call(obj)] || 'object'
    : typeof obj
}

var a = type({})
console.log(a)

function mergeSort(arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }

  let mid = ~~(len / 2)
  let first = arr.slice(0, mid)
  let last = arr.slice(mid)
  return merge(mergeSort(first), mergeSort(last))
  function merge(left, right) {
    let results = []
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        results.push(left.shift())
      } else {
        results.push(right.shift())
      }
    }

    while (left.length) {
      results.push(left.shift())
    }

    while (right.length) {
      results.push(right.shift())
    }
    return results
  }
}

console.log(mergeSort([31, 388, 29, 3838, 299, 47, 93, 2, 49, 44, 9, 11]))
