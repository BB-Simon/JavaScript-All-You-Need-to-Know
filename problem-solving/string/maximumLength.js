/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const n = s.length;
  let maxLen = -1;

  // Iterate over all possible substring lengths
  for (let length = 1; length <= n; length++) {
    const freq = new Map();

    // Check all substrings of the current length
    for (let i = 0; i <= n - length; i++) {
      const sub = s.substring(i, i + length);

      // Check if all characters in the substring are identical
      if ([...sub].every((c) => c === sub[0])) {
        freq.set(sub, (freq.get(sub) || 0) + 1);

        // If frequency of the substring is 3 or more, update maxLen
        if (freq.get(sub) >= 3) {
          maxLen = Math.max(maxLen, length);
        }
      }
    }
  }

  return maxLen;
};
