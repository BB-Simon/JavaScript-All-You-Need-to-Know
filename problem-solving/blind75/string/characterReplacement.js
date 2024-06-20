/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  //  maxlen, largestCount = 0, 0
  //       arr = collections.Counter()
  //       for idx in xrange(len(s)):
  //           arr[s[idx]] += 1
  //           largestCount = max(largestCount, arr[s[idx]])
  //           if maxlen - largestCount >= k:
  //               arr[s[idx - maxlen]] -= 1
  //           else:
  //               maxlen += 1
  //       return maxlen

  let maxLen = 0;
  let count = 0;
  let obj = {};

  for(let i = 0; i < s.length; i++){
    if (obj[s[i]]){
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }

    count = Math.max(count, obj[s[i]]);
    if((maxLen - count) >= k){
      obj[s[i - maxLen]] -= 1;
    } else {
      maxLen += 1;
    }
  }

  return maxLen;
};

characterReplacement('ABAB', 1)