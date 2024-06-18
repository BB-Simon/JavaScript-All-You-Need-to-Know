/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = new Set();
  const n = s.length;
  let maxLen = 0;
  let left = 0;

  for(let i = 0; i < n; i++) {
    if(!chars.has(s[i])) {
      chars.add(s[i]);
      maxLen = Math.max(maxLen, (i - left + 1))
    } else {
      while(chars.has(s[i])) {
        chars.delete(s[left]);
        left += 1;
      }
      chars.add(s[i]);
    }
  }

  return maxLen;

};

lengthOfLongestSubstring("abcabcbb")