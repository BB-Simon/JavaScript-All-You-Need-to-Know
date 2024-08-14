/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let low = 0;
  let high = nums[n - 1] - nums[0];

  function countPairs(maxDistance) {
    let count = 0;
    let j = 0;
    for (let i = 0; i < n; i++) {
      while (j < n && nums[j] - nums[i] <= maxDistance) {
        j++;
      }
      count += j - i - 1;
    }
    return count;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (countPairs(mid) < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};