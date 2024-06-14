/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // Using prefix and suffix logic
  let res = nums[0];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    if (left === 0) left = 1;
    if (right === 0) right = 1;

    left = left * nums[i];
    right = right * nums[(nums.length - i) - 1];
    res = Math.max(res, Math.max(left, right));
  }

  return res;
};