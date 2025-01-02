/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  let prefix = new Array(words.length + 1).fill(0);
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < words.length; i++) {
    prefix[i + 1] = prefix[i];
    if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
      prefix[i + 1] += 1;
    }
  }

  let ans = [];
  for (let [left, right] of queries) {
    ans.push(prefix[right + 1] - prefix[left]);
  }

  return ans;
};
