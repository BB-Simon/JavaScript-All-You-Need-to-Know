/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let ans = 0;

  for (const c of s) {
    if (c === '[') {
      ans += 1;
    } else if (ans > 0) {
      ans -= 1;
    }
  }

  return Math.floor((ans + 1) / 2);
};