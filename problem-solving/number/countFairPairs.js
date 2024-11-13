function countLess(nums, sum) {
    let res = 0;
    let j = nums.length - 1;
  
    for (let i = 0; i < j; i++) {
      while (i < j && nums[i] + nums[j] > sum) {
        j--;
      }
      res += j - i;
    }
  
    return res;
  }
  
  /**
   * @param {number[]} nums
   * @param {number} lower
   * @param {number} upper
   * @return {number}
   */
  var countFairPairs = function(nums, lower, upper) {
      nums.sort((a, b) => a - b);
      return countLess(nums, upper) - countLess(nums, lower - 1);
  };