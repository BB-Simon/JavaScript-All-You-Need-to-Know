/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (s) {
  // Helper function to perform DFS
  function dfs(i, j) {
    if (i === j) {
      return [parseInt(s[i])];
    }
    if (i === j - 1 && !['+', '-', '*'].includes(s[j])) {
      return [parseInt(s.slice(i, j + 1))];
    }
    if (memo.hasOwnProperty(`${i},${j}`)) {
      return memo[`${i},${j}`];
    }

    const res = [];
    for (let k = i; k <= j; k++) {
      const ch = s[k];
      if (['+', '-', '*'].includes(ch)) {
        const left = dfs(i, k - 1);
        const right = dfs(k + 1, j);
        for (const l1 of left) {
          for (const l2 of right) {
            if (ch === '+') {
              res.push(l1 + l2);
            } else if (ch === '-') {
              res.push(l1 - l2);
            } else if (ch === '*') {
              res.push(l1 * l2);
            }
          }
        }
      }
    }
    memo[`${i},${j}`] = res;
    return res;
  }

  const memo = {};
  return dfs(0, s.length - 1);
};