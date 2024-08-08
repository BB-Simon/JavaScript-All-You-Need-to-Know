/**
 * @param {number} rows 
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let i = rStart, j = cStart;
  let diri = 0, dirj = 1; // directions to move
  let twice = 2;
  let res = [];
  let moves = 1;
  let next_moves = 2;

  while (res.length < rows * cols) {
    if (i >= 0 && i < rows && j >= 0 && j < cols) {
      res.push([i, j]);
    }

    i += diri;
    j += dirj;
    moves -= 1;

    if (moves === 0) {
      [diri, dirj] = [dirj, -diri]; // 90 deg Clockwise
      twice -= 1;

      if (twice === 0) {
        twice = 2;
        moves = next_moves;
        next_moves += 1;
      } else {
        moves = next_moves - 1;
      }
    }
  }

  return res;

};