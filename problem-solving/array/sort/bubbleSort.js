/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // TODO: no working on big length arrays
  // Time Limit Exceeded
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let currEle = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = currEle;
      }
    }
  }

  return nums

};