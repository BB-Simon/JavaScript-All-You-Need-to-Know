/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // TODO: no working on big length arrays
  // Time Limit Exceeded

  // let res = []
  // while (nums.length) {
  //   let min = Math.min(...nums);
  //   res.push(min);
  //   nums.splice(nums.indexOf(min), 1)
  // }
  // return res

  // TODO: no working on big length arrays
  // Time Limit Exceeded
  for(let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;

    for(let j = i + 1; j < nums.length; j++){
      if(nums[j] < nums[minIdx]){
        minIdx = j;
      }
    }

    if(minIdx !== i){
      let temp = nums[i];
      nums[i] = nums[minIdx];
      nums[minIdx] = temp;
    }
  }


  return nums;
};