/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  function kmp(txt, patt) {
    const newString = patt + '#' + txt;
    const pi = new Array(newString.length).fill(0);

    let i = 1;
    let k = 0;

    while (i < newString.length) {
      if (newString[i] === newString[k]) {
        k++;
        pi[i] = k;
        i++;
      } else {
        if (k > 0) {
          k = pi[k - 1];
        } else {
          pi[i] = 0;
          i++;
        }
      }
    }

    return pi[pi.length - 1];
  }

  const count = kmp(s.split('').reverse().join(''), s);
  return s.slice(count).split('').reverse().join('') + s;
};