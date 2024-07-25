/**
 * @param {number[]} nums
 * @return {number[]}
 */
var quickSort = function (nums) {
  // TODO: not working on big length arrays
  // heap out of memory

  if (nums.length <= 1) {
    return nums;
  }

  let pivot = nums[Math.floor(nums.length / 2)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else if (nums[i] > pivot) {
      right.push(nums[i]);
    } else {
      equal.push(nums[i]);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));

};