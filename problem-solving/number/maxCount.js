/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  const bannedSet = new Set(banned); // Convert banned array to a set for quick lookups
  let totalSum = 0; // Track the cumulative sum
  let count = 0; // Track the count of valid numbers

  for (let i = 1; i <= n; i++) {
    if (bannedSet.has(i)) {
      continue; // Skip banned numbers
    }
    totalSum += i;
    if (totalSum > maxSum) {
      break; // Stop if the sum exceeds maxSum
    }
    count++;
  }

  return count;
};
