/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const str = s1.split(' ').concat(s2.split(' '));
  let res = {};

  for (let s of str) {
    res[s] = res[s] ? res[s] + 1 : res[s] || 0 + 1;
  }

  return Object.keys(res).filter(k => res[k] === 1)
};