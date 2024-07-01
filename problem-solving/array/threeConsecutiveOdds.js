/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
  //     return true
  //   }
  // }
  // return false;

  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0){
      count +=1;

      if(count === 3){
        return;
      }
    } else {
      count = 0;
    }
  }

  return false;
};