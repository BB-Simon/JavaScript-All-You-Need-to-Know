/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  // Initialize the map with -2 and set mapy[0] to -1
  const mapy = new Array(32).fill(-2);
  mapy[0] = -1;

  let maxLen = 0;
  let mask = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Update the mask based on the current character
    if (char === 'a') {
      mask ^= 1;
    } else if (char === 'e') {
      mask ^= 2;
    } else if (char === 'i') {
      mask ^= 4;
    } else if (char === 'o') {
      mask ^= 8;
    } else if (char === 'u') {
      mask ^= 16;
    }

    // Check if this mask has been seen before
    const prev = mapy[mask];
    if (prev === -2) {
      mapy[mask] = i;
    } else {
      maxLen = Math.max(maxLen, i - prev);
    }
  }

  return maxLen;
};