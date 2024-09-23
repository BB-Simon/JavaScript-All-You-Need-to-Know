/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  // Convert the dictionary list into a Set for O(1) lookup time
  const wordSet = new Set(dictionary);
  const n = s.length;

  // dp[i] will store the minimum extra characters in the substring s[i:]
  const dp = new Array(n + 1).fill(0);

  // Fill dp array from right to left
  for (let i = n - 1; i >= 0; i--) {
    // By default, assume the current character is extra
    dp[i] = dp[i + 1] + 1;

    // Try to match any word from the dictionary starting at index i
    for (let length = 1; length <= n - i; length++) {
      if (wordSet.has(s.slice(i, i + length))) {
        dp[i] = Math.min(dp[i], dp[i + length]);
      }
    }
  }

  // The answer is the number of extra characters in the entire string
  return dp[0];
};