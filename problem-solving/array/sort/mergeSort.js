/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeSort = function (nums) {
  // TODO: works on big length array
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const l = nums.slice(0, mid);
  const r = nums.slice(mid);

  function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }

    // Concatenate the remaining elements
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }

  return merge(mergeSort(l), mergeSort(r));
};

mergeSort([5, 2, 9, 1, 5])