/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i, arr)
  }

  return arr;
};

let arr = [1, 2, 3];
let fn = function constant() { return 42; }
// let fn = function plusone(n) { return n + 1; };
// let fn = function plusI(n, i) { return n + i; };

let res = map(arr, fn);

console.log({res})