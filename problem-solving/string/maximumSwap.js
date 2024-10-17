/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  // Convert the number to an array of characters for easy manipulation
  let numList = num.toString().split('');

  // Track the last occurrence of each digit (0-9)
  let last = {};
  for (let i = 0; i < numList.length; i++) {
    last[numList[i]] = i;
  }

  // Traverse the number from left to right
  for (let i = 0; i < numList.length; i++) {
    // Check for a larger digit to swap
    for (let d = 9; d > numList[i]; d--) {
      if (last[d] > i) {
        // Swap and return the new number
        [numList[i], numList[last[d]]] = [numList[last[d]], numList[i]];
        return parseInt(numList.join(''));
      }
    }
  }

  // If no swap occurred, return the original number
  return num;
};