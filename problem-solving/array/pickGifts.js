/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  while (k > 0) {
    // Sort the array in descending order
    gifts.sort((a, b) => b - a);

    // Take the largest pile
    const pile = gifts.shift(); // Remove the largest pile
    gifts.push(Math.floor(Math.sqrt(pile))); // Add the square root of the largest pile

    k -= 1; // Decrease the number of operations
  }

  // Return the sum of the remaining gifts
  return gifts.reduce((acc, gift) => acc + gift, 0);
};
