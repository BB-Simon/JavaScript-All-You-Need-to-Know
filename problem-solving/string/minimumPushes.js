/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  // Step 1: Count the frequency of each character
  const freq = {};
  for (let char of word) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Sort the frequencies in descending order
  const values = Object.values(freq).sort((a, b) => b - a);

  // Step 3: Calculate the sum and return
  return values.reduce((acc, f, i) => acc += values[i] * (Math.floor(i / 8) + 1), 0)
};