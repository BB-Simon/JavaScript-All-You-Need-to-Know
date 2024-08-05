/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  // let hash = {}

  // for (let ele of arr) {
  //   if (hash[ele]) {
  //     hash[ele] += 1;
  //   } else {
  //     hash[ele] = 1;
  //   }
  // }

  // let res = Object.keys(hash).filter(key => hash[key] === 1)

  // return res[k - 1] ? res[k - 1] : ""

  const hash = {}
  for (let ele of arr) {
    hash[ele] = (hash[ele] || 0) + 1;
  }
  const res = Object.keys(hash).filter(key => hash[key] === 1)
  return res[k - 1] ? res[k - 1] : ""
};