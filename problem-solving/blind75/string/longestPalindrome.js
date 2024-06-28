/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  // 1. two pointers solution
  // if (s.length <= 1) {
  //   return s
  // }

  // let start = 0;
  // let end = 0;

  // function expand(s, l, r) {
  //   while (l >= 0 && r < s.length && s[l] === s[r]) {
  //     l -= 1;
  //     r += 1;
  //   }
  //   return (r - (l - 1));
  // }

  // for (let i = 0; i < s.length; i++) {
  //   let odd = expand(s, i, i);
  //   let even = expand(s, i, (i + 1));

  //   let maxLen = Math.max(odd, even);

  //   if (maxLen > (end - start)) {
  //     start = Math.floor(i - (maxLen - 1 / 2))
  //     end = Math.floor(i + maxLen / 2)
  //   }
  // }

  // return s.slice(start, end + 1)

  // 2. This solution Time Limit Exceeded
  // if (s.length <= 1) {
  //   return s
  // }

  // let maxLen = 1;
  // let strs = s[0]


  // for (let i = 0; i < s.length - 1; i++) {
  //   for (let j = i + 1; j < s.length; j++) {
  //     let s1 = s.slice(i, j + 1);
  //     let s2 = s1.split('').reverse().join('');

  //     if (j - i + 1 > maxLen && s1 === s2) {
  //       maxLen = j - i + 1;
  //       strs = s1
  //     }
  //   }
  // }

  // return strs


  // 3. two  pointers works
  if (s.length <= 1) {
    return s
  }

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l -= 1;
      r += 1;
    }
    return s.slice(l + 1, r);
  }

  let maxStr = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    let odd = expand(i, i);
    let even = expand(i, (i + 1));

    if (odd.length > maxStr.length) {
      maxStr = odd
    }

    if (even.length > maxStr.length) {
      maxStr = even
    }
  }

  return maxStr
};