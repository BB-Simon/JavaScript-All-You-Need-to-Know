/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (s, t) {
  const n = s.length;
  let i = 0,
    j = 0;

  while (i < n || j < n) {
    // Move pointers past underscores in both strings
    while (i < n && s[i] === "_") i++;
    while (j < n && t[j] === "_") j++;

    // If both pointers are out of bounds, strings are valid
    if (i === n && j === n) return true;

    // If one pointer is out of bounds or characters don't match
    if (i === n || j === n || s[i] !== t[j]) return false;

    // Check constraints for 'L' and 'R'
    if ((s[i] === "L" && i < j) || (s[i] === "R" && i > j)) return false;

    // Move both pointers
    i++;
    j++;
  }

  return true;
};
