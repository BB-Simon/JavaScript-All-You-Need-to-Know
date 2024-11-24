/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let sum = 0;
  let minAbs = Infinity;
  let negOdd = false;

  for (const row of matrix) {
    for (const x of row) {
      minAbs = Math.min(minAbs, Math.abs(x));
      if (x < 0) {
        sum -= x;
        negOdd = !negOdd;
      } else {
        sum += x;
      }
    }
  }

  return negOdd ? sum - 2 * minAbs : sum;
};
