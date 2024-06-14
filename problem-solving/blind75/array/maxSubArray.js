/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxCurrentIdx = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    maxCurrentIdx += nums[i]
    if (maxCurrentIdx > maxSum) {
      maxSum = maxCurrentIdx
    }

    if (maxCurrentIdx < 0) {
      maxCurrentIdx = 0
    }
  }

  return maxSum;

};

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])