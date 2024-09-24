/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  let ans = 0;
  const seen = new Set();

  // Store all prefixes of numbers from arr1 in the set
  for (let num of arr1) {
    while (num) {
      seen.add(num);
      num = Math.floor(num / 10);
    }
  }

  // Check prefixes of numbers from arr2 and find the longest common one
  for (let num of arr2) {
    while (num) {
      if (seen.has(num)) {
        ans = Math.max(ans, num);
        break;
      }
      num = Math.floor(num / 10);
    }
  }

  // Return the length of the longest common prefix or 0 if none exists
  return ans ? String(ans).length : 0;
};