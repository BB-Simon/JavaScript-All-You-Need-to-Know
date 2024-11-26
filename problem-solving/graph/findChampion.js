/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  const isUndefeated = new Array(n).fill(true);

  // Mark teams that have lost at least once
  for (const [winner, loser] of edges) {
    isUndefeated[loser] = false;
  }

  let champion = -1;
  let championCount = 0;

  // Identify the potential champion
  for (let team = 0; team < n; team++) {
    if (isUndefeated[team]) {
      champion = team;
      championCount++;
    }
  }

  // If there's exactly one undefeated team, return it
  if (championCount === 1) {
    return champion;
  }

  // Otherwise, there's no champion
  return -1;
};
