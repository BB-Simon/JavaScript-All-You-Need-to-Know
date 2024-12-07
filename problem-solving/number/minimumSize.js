/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOps) {
  let low = 1,
    high = Math.max(...nums); // Set initial range for binary search

  while (low < high) {
    let mid = Math.floor((low + high) / 2); // Midpoint of the current range

    // Calculate the number of operations needed to reduce bag sizes to `mid` or less
    let operations = nums.reduce(
      (acc, n) => acc + Math.floor((n - 1) / mid),
      0
    );

    if (operations <= maxOps) {
      high = mid; // Try a smaller size
    } else {
      low = mid + 1; // Increase size as more operations are needed
    }
  }

  return high; // The smallest valid size
};
