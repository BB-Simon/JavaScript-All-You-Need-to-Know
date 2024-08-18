/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const r = points.length;
  const c = points[0].length;

  for (let i = 1; i < r; i++) {
    const right = new Array(c).fill(0);
    right[c - 1] = points[i - 1][c - 1];

    for (let j = c - 2; j >= 0; j--) {
      right[j] = Math.max(right[j + 1] - 1, points[i - 1][j]);
    }

    let left = points[i - 1][0];
    points[i][0] = Math.max(left, right[0]) + points[i][0];

    for (let j = 1; j < c; j++) {
      left = Math.max(left - 1, points[i - 1][j]);
      points[i][j] = Math.max(left, right[j]) + points[i][j];
    }
  }

  return Math.max(...points[r - 1]);
};