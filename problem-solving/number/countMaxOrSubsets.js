/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const n = nums.length;
  const max_OR = nums.reduce((acc, num) => acc | num, 0); // Calculate max_OR using bitwise OR

  const f = (i, acc_or) => {
    if (i < 0) return acc_or === max_OR ? 1 : 0; // Base case
    if (acc_or === max_OR) return 1 << (i + 1); // Early stop

    const skip = f(i - 1, acc_or); // Skip current element
    const take = f(i - 1, acc_or | nums[i]); // Take current element

    return skip + take; // Combine results
  };

  return f(n - 1, 0); // Start recursion
};

countMaxOrSubsets([3, 1]) //should returns 2