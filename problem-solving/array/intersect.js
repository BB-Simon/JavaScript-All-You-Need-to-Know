/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let shorter, larger;

  if (nums1.length < nums2.length) {
    shorter = nums1;
    larger = nums2;
  } else {
    shorter = nums2;
    larger = nums1;
  }

  let res = []

  // 1. Map data stracture solution
  // let myMap = new Map();
  // for (let i = 0; i < shorter.length; i++) {
  //   if (myMap.has(shorter[i])) {
  //     myMap.set(shorter[i], myMap.get(shorter[i]) + 1)
  //   } else {
  //     myMap.set(shorter[i], 1)
  //   }
  // }

  // for (let i = 0; i < larger.length; i++) {
  //   if (myMap.has(larger[i])) {
  //     res.push(larger[i])
  //     myMap.set(larger[i], myMap.get(larger[i]) - 1)
  //     if (myMap.get(larger[i]) === 0) {
  //       myMap.delete(larger[i])
  //     }
  //   }
  // }

  // return res;

  // 2. Onject | hash solution
  // let obj = {};

  // for (let i = 0; i < shorter.length; i++) {
  //   if (obj[shorter[i]]) {
  //     obj[shorter[i]] = obj[shorter[i]] + 1;
  //   } else {
  //     obj[shorter[i]] = 1;
  //   }
  // }

  // for (let i = 0; i < larger.length; i++) {
  //   if (obj[larger[i]]) {
  //     res.push(larger[i])
  //     obj[larger[i]] = obj[larger[i]] - 1;
  //     if (obj[larger[i]] === 0) {
  //       delete obj[larger[i]]
  //     }
  //   }
  // }

  // return res;


  // 3. Array version solution
  // let freq = new Array(1001).fill(0);
  // for (let n of nums1) {
  //   freq[n] += 1
  // }

  // for (let n of nums2) {
  //   if (freq[n] > 0) {
  //     res.push(n)
  //     freq[n] -= 1
  //   }
  // }

  // return res;


  // 4. Optimized hash table solution
  let obj = {};

  for (let i = 0; i < nums1.length; i++) {
    if (obj[nums1[i]]) {
      obj[nums1[i]] = obj[nums1[i]] + 1;
    } else {
      obj[nums1[i]] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]] && obj[nums2[i]] > 0) {
      res.push(nums2[i])
      obj[nums2[i]] = obj[nums2[i]] - 1;
    }
  }

  return res;
};