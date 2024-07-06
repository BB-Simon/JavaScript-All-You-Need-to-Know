/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const x = 2 * (n - 1)
  const y = time % x

  if (y < n) {
    return 1 + y
  } else {
    return x + 1 - y
  }
};