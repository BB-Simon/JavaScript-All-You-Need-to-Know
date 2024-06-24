/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

  // 1. Array split, join, sort solution
  // s = s.split('').sort().join('');
  // t = t.split('').sort().join('');
  // if (s === t) {
  //   return true;
  // }
  // return false;

  // 2. hash solution
  if (s.length !== t.length) {
    return false
  }
  const hash = {}

  for (str of s) {
    if (hash[str]) {
      hash[str] = hash[str] + 1;
    } else {
      hash[str] = 1
    }
  }

  for (let str of t) {
    hash[str] = hash[str] || 0
    if (hash[str] === 0) {
      return false;
    }
    hash[str] -= 1;
  }

  return true
};