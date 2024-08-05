/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // #1 Solution
  // nums1.splice(m, n, ...nums2)
  // nums1.sort((a, b) => a - b);

  // #2 Solution
  
  if (n === 0) {
    return;
  }

  let lastIdx = m + n - 1;

  while (n > 0 && m > 0) {
    if (nums2[n - 1] >= nums1[m - 1]) {
      nums1[lastIdx] = nums2[n - 1]
      n -= 1;
    } else {
      nums1[lastIdx] = nums1[m - 1]
      m -= 1
    }

    lastIdx -= 1;
  }

  while (n > 0) {
    nums1[lastIdx] = nums2[n - 1]
    n -= 1
    lastIdx -= 1;
  }

};