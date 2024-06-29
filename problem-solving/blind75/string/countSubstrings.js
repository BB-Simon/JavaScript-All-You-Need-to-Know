/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  let n = s.length;

  function getplindromeCount(l, r) {
    let x = 0;
    while (l >= 0 && r < n && s[l] === s[r]) {
      l -= 1;
      r += 1;
      x += 1;
    }
    return x;
  }

  for (let i = 0; i < s.length; i++) {
    let even = getplindromeCount(i, i + 1)
    let odd = getplindromeCount(i, i);
    count += (even + odd);
  }

  return count;
 
};

countSubstrings("aaa")