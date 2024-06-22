/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // First solution with `Array.prototype.find()`
  // const x = nums.find((n) => n === target);
  // if (x !== undefined) return nums.indexOf(x);
  // return -1;

  // Second `for loop` solution
  // let x = -1;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     x = i;
  //     break
  //   }
  // }
  // return x;


  // Third solution with `Binary search`
  let n = nums.length;
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid
    }

    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};