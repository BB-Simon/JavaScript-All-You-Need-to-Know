/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const count = {};
  for(let char of t){
    if(count[char]){
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  let r = 0;
  let l = 0;
  let minCharsLen = t.length;
  let minStart = 0;
  let minLen = Infinity;

  while(r < s.length){
    if(count[s[r]] > 0){
      minCharsLen -= 1;
    }

    count[s[r]] -= 1;
    r += 1;
    while(minCharsLen === 0){
      if(r - l < minLen){
        minStart = l;
        minLen = (r - l);
      }

      count[s[l]] += 1;

      if(count[s[l]] > 0) {
        minCharsLen += 1;
      }
      l += 1;
    }
  }

  if (minLen !== Infinity) {
    return s.slice(minStart, (minStart + minLen))
  }
    
  return "";
};

console.log(minWindow('a', 'aa'))