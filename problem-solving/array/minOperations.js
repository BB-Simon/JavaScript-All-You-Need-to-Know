/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let moves = 0;

  for (let log of logs) {
    if (log === "../") {
      if (moves > 0) {
        moves -= 1;
      }
    } else if (log !== "./") {
      moves += 1;
    }
  }

  return moves
};