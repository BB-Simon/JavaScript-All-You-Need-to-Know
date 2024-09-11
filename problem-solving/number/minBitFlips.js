/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let x = start ^ goal;
  return x.toString(2).split('0').join('').length;
};