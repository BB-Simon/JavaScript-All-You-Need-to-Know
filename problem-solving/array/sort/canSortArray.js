function haveSameSetBits(a, b) {
  // Count the number of 1s in the binary representation of both numbers
  const countSetBits = (num) => num.toString(2).split("0").join("").length;
  return countSetBits(a) === countSetBits(b);
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  const N = nums.length;
  const times = N;

  // Perform bubble sort-like operation with the set bits condition
  for (let t = 0; t < times; t++) {
    for (let i = 0; i < N - 1; i++) {
      if (haveSameSetBits(nums[i], nums[i + 1]) && nums[i + 1] < nums[i]) {
        // Swap the elements
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }

  // Check if the array is sorted
  return nums.join(",") === [...nums].sort((a, b) => a - b).join(",");
};
