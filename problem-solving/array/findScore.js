/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const n = nums.length;
  let sum = 0;
  let r = 0;

  while (r < n) {
    let l = r;

    // Find the end of the non-increasing segment
    while (r + 1 < n && nums[r] > nums[r + 1]) {
      r++;
    }

    // Add alternate elements of the segment to the sum
    for (let i = r; i >= l; i -= 2) {
      sum += nums[i];
    }

    r += 2; // Move to the next segment
  }

  return sum;
};

const nums = [
  10, 44, 10, 8, 48, 30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 22, 3, 42, 42,
];

console.log(findScore(nums));

// [10, 44, 10, 8, 48, 30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 22, 3, 42, 42];
// [10, 44, 10, 8, 48, 30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 42];
// [10, 44, 30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 42];
// [30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 42];
// [30, 17, 38, 41, 45, 45, 34, 30, 42];
// [30, 17, 38, 41, 45, 45, 34, 30, 42];
// [41, 45, 45, 34, 30, 42];
// [41, 45, 45];
// [45];
// [];
