/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const freq = new Array(k).fill(0);

  for (let num of arr) {
    let remainder = (num % k + k) % k;
    freq[remainder]++;
  }

  if (freq[0] % 2 !== 0) {
    return false;  // Remainders of 0 must form pairs
  }

  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (freq[i] !== freq[k - i]) {
      return false;  // Remainders i and k-i must have the same frequency
    }
  }

  return true;
};