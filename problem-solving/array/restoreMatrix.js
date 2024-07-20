/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let m = rowSum.length;
  let n = colSum.length;

  let matrix = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  let i = m - 1
  let j = n - 1

  while (i >= 0 && j >= 0) {
    if (rowSum[i] <= colSum[j]) {
      matrix[i][j] = rowSum[i]
      colSum[j] -= rowSum[i]
      i -= 1
    } else {
      matrix[i][j] = colSum[j]
      rowSum[i] -= colSum[j]
      j -= 1
    }
  }
  return matrix
};