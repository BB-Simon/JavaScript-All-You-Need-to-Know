/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // TODO: no working on big length arrays
  // Time Limit Exceeded
  for (let i = 1; i < nums.length; i++) {
    let currEle = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > currEle) {
      nums[j + 1] = nums[j];
      j -= 1;
    }

    nums[j + 1] = currEle;
  }

  return nums
};