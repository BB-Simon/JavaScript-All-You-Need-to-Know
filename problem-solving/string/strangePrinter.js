/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(-1));

  function util(i, j, s, dp) {
    if (i > j) {
      return 0;
    }

    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    const firstLetter = s[i];
    let answer = 1 + util(i + 1, j, s, dp);
    for (let k = i + 1; k <= j; k++) {
      if (s[k] === firstLetter) {
        const betterAnswer = util(i, k - 1, s, dp) + util(k + 1, j, s, dp);
        answer = Math.min(answer, betterAnswer);
      }
    }
    dp[i][j] = answer;
    return answer;
  }

  return util(0, n - 1, s, dp);

};