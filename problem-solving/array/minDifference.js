/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  // 1. sort and min
  // let n = nums.length;
  // if (n <= 4) {
  //   return 0
  // }

  // nums.sort((a, b) => a - b);

  // return Math.min(
  //   (nums[n - 1] - nums[3]),
  //   (nums[n - 2] - nums[2]),
  //   (nums[n - 3] - nums[1]),
  //   (nums[n - 4] - nums[0]),
  // )

  // 2. 0..3 moves solution
  let n = nums.length;
  if (n <= 4) {
    return 0
  }

  nums.sort((a, b) => a - b);
  let big = nums.slice(n - 4)
  let small = nums.slice(0, 4);

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= 3; i++) {
    min = Math.min(min, (big[i] - small[i]))
  }

  return min;
};

minDifference([1, 5, 0, 10, 14])