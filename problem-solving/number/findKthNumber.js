/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  function getReqNum(a, b, n) {
    let gap = 0;
    while (a <= n) {
      gap += Math.min(n + 1, b) - a;
      a *= 10;
      b *= 10;
    }
    return gap;
  }

  let num = 1;
  let i = 1;

  while (i < k) {
    const req = getReqNum(num, num + 1, n);

    if (i + req <= k) {
      i += req;
      num += 1;  // Move to the next number
    } else {
      i += 1;
      num *= 10;  // Move to the next level
    }
  }

  return num;
};