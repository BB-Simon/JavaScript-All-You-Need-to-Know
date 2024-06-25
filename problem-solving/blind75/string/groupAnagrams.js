/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let ans = {}
  for (let s of strs) {
    let w = s.split('').sort().join('')
    if (!ans[w]) {
      ans[w] = [s]
    } else {
      ans[w].push(s)
    }
  }
  return Object.values(ans);
};