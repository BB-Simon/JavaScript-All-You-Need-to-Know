// Helper function to compare two frequency count objects
function compareCounts(count1, count2) {
  if (Object.keys(count1).length !== Object.keys(count2).length) {
    return false;
  }
  for (const key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // Edge case: if s1 is longer than s2, s1's permutation can't be in s2
  if (s1.length > s2.length) {
    return false;
  }

  // Create frequency count for s1
  const s1Count = {};
  for (const char of s1) {
    s1Count[char] = (s1Count[char] || 0) + 1;
  }

  // Initialize a sliding window for s2 (first window of size len(s1))
  const windowCount = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    windowCount[char] = (windowCount[char] || 0) + 1;
  }

  // Compare the first window
  if (compareCounts(s1Count, windowCount)) {
    return true;
  }

  // Start sliding the window across s2
  for (let i = s1.length; i < s2.length; i++) {
    // Include a new character from the right (expand the window)
    const newChar = s2[i];
    windowCount[newChar] = (windowCount[newChar] || 0) + 1;

    // Remove the character that's left behind (contract the window)
    const oldChar = s2[i - s1.length];
    windowCount[oldChar] -= 1;

    // Clean up the zero count to avoid comparing unnecessary keys
    if (windowCount[oldChar] === 0) {
      delete windowCount[oldChar];
    }

    // Compare the window with s1Count
    if (compareCounts(s1Count, windowCount)) {
      return true;
    }
  }

  // If no permutation was found
  return false;
};