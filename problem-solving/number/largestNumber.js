/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // Convert integers to strings
  const array = nums.map(String);

  // Custom sorting with a lambda function
  array.sort((a, b) => (b + a).localeCompare(a + b));

  // Handle the case where the largest number is "0"
  if (array[0] === "0") {
    return "0";
  }

  // Build the largest number from the sorted array
  const largest = array.join('');

  return largest;
};