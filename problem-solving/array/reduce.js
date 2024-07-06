/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;

  for(let i = 0; i < nums.length; i++){
    val = fn(val, nums[i])
  }

  return val
};

let nums = [{id: 1, name: "SK"}, {id: 2, name: "JK"}]
let fn = function sum(accum, curr) { 
  return [
    ...accum,
    {
      UUID: `${curr.name}${curr.id}`,
    }
  ]
}
// let fn = function sum(accum, curr) { return accum + curr * curr; }
let init = []
const res = reduce(nums, fn, init);

console.log({ res })