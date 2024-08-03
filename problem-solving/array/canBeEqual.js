/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {

  // #1 Solution
  // target = target.sort((a, b) => a - b)
  // arr = arr.sort((a, b) => a - b);

  // for (let i = 0; i < target.length; i++) {
  //   if (target[i] !== arr[i]) {
  //     return false;
  //   }
  // }

  // return true;

  // #2 Solution
  const hash = {}
  for(let t of target) {
    if(!hash[t]){
      hash[t] = 1;
    } else {
      hash[t] += 1;
    }
  }

  for(let ar of arr) {
    if(hash[ar]){
      hash[ar] -=1
    }
  }

  let res = Object.keys(hash).reduce((acc, k) => acc+= hash[k],0);

  if(res === 0){
    return true;
  }

  return false;
};