/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  // Step 1: Create a count array to keep track of the frequency of each number
  let count = Array(201).fill(0);

  // Step 2: Count the frequency of each number in the nums array
  for (let num of nums) {
    count[num + 100]++;
  }

  // Step 3: Sort the nums array
  nums.sort((a, b) => {
    // Compare by frequency first
    if (count[a + 100] === count[b + 100]) {
      // If frequencies are the same, sort by value in descending order
      return b - a;
    }
    // Otherwise, sort by frequency in ascending order
    return count[a + 100] - count[b + 100];
  });

  // Step 4: Return the sorted array
  return nums;
};