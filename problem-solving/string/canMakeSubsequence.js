/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  let i = 0,
    j = 0; // Two pointers
  const n1 = str1.length,
    n2 = str2.length;

  while (i < n1 && j < n2) {
    // Check if transformation is valid
    if ((str2.charCodeAt(j) - str1.charCodeAt(i) + 26) % 26 <= 1) {
      j++;
    }
    i++;
  }

  return j === n2;
};
