/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length;
  const sumRolls = rolls.reduce((acc, roll) => acc + roll, 0);
  const total = (n + m) * mean;
  const miss = total - sumRolls;

  if (miss > 6 * n || miss < n) return [];

  const q = Math.floor(miss / n);
  const r = miss % n;

  return Array(r).fill(q + 1).concat(Array(n - r).fill(q));
};