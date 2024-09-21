/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  function getNextNumber(current, n) {
    if (current * 10 <= n) {
      return current * 10;  // Move to the next "level" in the lexicographical order
    }

    if (current >= n) {
      current = Math.floor(current / 10);  // Go back to the parent node
    }

    current += 1;  // Increment to get to the next number

    while (current % 10 === 0) {
      current = Math.floor(current / 10);  // Remove trailing zeros
    }

    return current;
  }


  const result = [];
  let current = 1;

  for (let i = 0; i < n; i++) {
    result.push(current);
    current = getNextNumber(current, n);
  }

  return result;
};