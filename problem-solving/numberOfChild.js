/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
  const x = 2 * (n - 1)
  const y = k % x

  if (y < n) {
    return y
  } else {
    return x - y
  }
};