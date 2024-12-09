/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const n = nums.length;
  const prefix = Array(n).fill(0);

  // Build the prefix array
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1];
    if (nums[i - 1] % 2 === nums[i] % 2) {
      // Same parity means a "special pair"
      prefix[i] += 1;
    }
  }

  const result = [];

  // Process each query
  for (const [left, right] of queries) {
    const specialCount = prefix[right] - (left > 0 ? prefix[left] : 0);
    result.push(specialCount === 0);
  }
  return result;
};
