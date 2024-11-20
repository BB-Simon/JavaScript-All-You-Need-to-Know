/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    const n = s.length;

  // Count the occurrences of 'a', 'b', and 'c' in the string
  const count = { a: 0, b: 0, c: 0 };
  for (const char of s) {
      count[char]++;
  }

  // If there are not enough of any character, return -1
  if (count['a'] < k || count['b'] < k || count['c'] < k) {
      return -1;
  }

  // Target counts: characters that must remain outside the subarray
  const target = {
      a: count['a'] - k,
      b: count['b'] - k,
      c: count['c'] - k,
  };

  // Sliding window to find the maximum valid window size
  let left = 0;
  let maxWindow = 0;
  const windowCount = { a: 0, b: 0, c: 0 };

  for (let right = 0; right < n; right++) {
      windowCount[s[right]]++;

      // Shrink the window if any character count exceeds the target
      while (
          windowCount['a'] > target['a'] ||
          windowCount['b'] > target['b'] ||
          windowCount['c'] > target['c']
      ) {
          windowCount[s[left]]--;
          left++;
      }

      // Update the maximum window size
      maxWindow = Math.max(maxWindow, right - left + 1);
  }

  // The result is the total length minus the maximum valid window
  return n - maxWindow;
  
};