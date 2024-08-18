/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let res = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let first, last;

  for(let i = 1; i < arrays.length; i++){
    first = arrays[i][0];
    last = arrays[i][arrays[i].length - 1];

    res = Math.max(res, Math.max(last - min, max - first))
    
    min = Math.min(min, first)
    max = Math.max(last, max)
  }


  return res;
};