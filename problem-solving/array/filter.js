/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let a = [];

  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i], i)){
      a.push(arr[i])
    }
  }

  return a;
};
let arr = [-2, -1, 0, 1, 2];
let fn = function plusOne(n) { return n + 1 }
// let fn = function firstIndex(n, i) { return i === 0; }
// let fn = function greaterThan10(n) { return n > 10; }

const res = filter(arr, fn);

console.log({res})