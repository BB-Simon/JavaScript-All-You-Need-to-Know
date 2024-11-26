/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const n = nums.length;
  const elements = new Set();
  let currentSum = 0;
  let maxSum = 0;
  let begin = 0;

  for (let end = 0; end < n; end++) {
    if (!elements.has(nums[end])) {
      currentSum += nums[end];
      elements.add(nums[end]);

      if (end - begin + 1 === k) {
        maxSum = Math.max(maxSum, currentSum);

        currentSum -= nums[begin];
        elements.delete(nums[begin]);
        begin++;
      }
    } else {
      while (nums[begin] !== nums[end]) {
        currentSum -= nums[begin];
        elements.delete(nums[begin]);
        begin++;
      }
      begin++;
    }
  }

  return maxSum;
};
