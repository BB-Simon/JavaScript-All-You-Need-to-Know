/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let forward = 0
  let backward = 0

  for (let c of s) {
    if (c === '(') {
      forward += 1;
    } else if (c === ')' && forward > 0) {
      forward -= 1;
    } else {
      backward += 1;
    }
  }

  return Math.abs(backward + forward);
};