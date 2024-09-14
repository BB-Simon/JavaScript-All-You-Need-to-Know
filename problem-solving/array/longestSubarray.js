/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const n = nums.length;
  let maxLen = 0, xMax = 0, len = 0, i = 0;

  while (i < n) {
    // Count subarray of elements equal to xMax
    while (i < n && nums[i] === xMax) {
      i++;
      len++;
    }

    // If end of array or element is less than xMax, update maxLen and reset len
    if (i === n || nums[i] < xMax) {
      maxLen = Math.max(maxLen, len);
      len = 0;
    } else {
      // If a larger element is found, update xMax and reset both maxLen and len
      xMax = nums[i];
      maxLen = len = 1;
    }
    i++;
  }

  return maxLen;
};

longestSubarray([1, 2, 3, 3, 2, 2])