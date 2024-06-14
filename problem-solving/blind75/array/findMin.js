/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // Useing binary search
  let n = nums.length;
  let left = 0; 
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // we have decreasing pattern in [mid, .., hi]
      // search the left side
      left = mid + 1;
    } else if(nums[left] < nums[mid]) {
      // we have increasing pattern in [lo, .., mid]
      // search the left side 
      right = mid;
    } else {
      // if the same just move hi pointer
      right -= 1;
    }
  }

  return nums[left];
};

console.log(findMin([11, 13, 15, 17]))