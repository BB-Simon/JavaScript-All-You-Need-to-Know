/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 1. Solution 1 with Regex, array split, reverse and join
  // s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // const rs = s.split('').reverse().join('');

  // if (s === rs) return true;
  // return false;

  // 2. Two pointer solution
  let l = 0;
  let r = s.length - 1;

  while(l <= r){
    let currentLeft = s[l];
    let currentRight = s[r];
    if (!/^[a-zA-Z0-9]+$/.test(currentLeft)){
      l+=1;
    } else if (!/^[a-zA-Z0-9]+$/.test(currentRight)){
      r-= 1;
    } else {
      if (currentLeft.toLowerCase() !== currentRight.toLowerCase()){ 
        return false;
      }
      l += 1;
      r -= 1;
    }
  }

  return true;
};