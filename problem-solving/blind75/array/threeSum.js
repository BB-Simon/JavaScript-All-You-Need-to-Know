/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // nums.sort()
  // let res = [];

  // for (let i = 0; i < nums.length; i++) {
  //   if (i > 0 && nums[i] === nums[i - 1]) {
  //     continue
  //   }

  //   let j = i + 1;
  //   let k = nums.length - 1;

  //   while (j < k) {
  //     let total = nums[i] + nums[j] + nums[k];

  //     if (total > 0) {
  //       k -= 1;
  //     } else if (total < 0) {
  //       j += 1;
  //     } else {
  //       res.push([nums[i], nums[j], nums[k]]);
  //       j += 1;

  //       while (nums[j] === nums[j - 1] && j < k) {
  //         j += 1
  //       }
  //     }
  //   }
  // }
  // return res;

  // nums.sort((a, b) => a - b)
  // let res = [];

  // for (let i = 0; i < (nums.length - 2); i++) {
  //   if (nums[i] > 0) {
  //     break
  //   }

  //   if (i > 0 && nums[i] === nums[i - 1]) {
  //     continue
  //   }

  //   let j = i + 1;
  //   let k = nums.length - 1;

  //   while (j < k) {
  //     let total = nums[i] + nums[j] + nums[k];

  //     if (total < 0) {
  //       j += 1;
  //     } else if (total > 0) {
  //       k -= 1;
  //     } else {
  //       let t = [nums[i], nums[j], nums[k]];
  //       res.push(t);


  //       while (j < k && nums[j] === t[1]) {
  //         j += 1
  //       }

  //       while (j < k && nums[k] === t[2]) {
  //         k -= 1
  //       }
  //     }
  //   }
  // }

  // return res;
};

threeSum([0, 0, 0, 0, 0])