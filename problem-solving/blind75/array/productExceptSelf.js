/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

  // The problem requires us to calculate the product 
  // of all elements in the array except the current element at 
  // each position without using division.
  // We can achieve this by computing 
  // the product of all elements to the left and all elements to the 
  // right of each index and then multiplying these two results for each index.
  const len = nums.length;
  const left = new Array(len)
  const right = new Array(len)
  const output = new Array(len)
  left[0] = 1;
  right[len-1] = 1;

  for (let i = 1; i < len; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = (len - 2); i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < len; i++) {
    output[i] = left[i] * right[i];
  }

  return output
};

productExceptSelf([1, 2, 3, 4])