function twoSum(nums, target) {
  let res = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = (i + 1); j < nums.length; j++) {
      console.log(nums[j])
      if ((nums[i] + nums[j]) === target) {
        res.push(...[i, j]);
        break
      }
    }
  }
  return res;

};

// twoSum([2, 7, 11, 15], 9)