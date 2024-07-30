/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let n = s.length;
  let f = Array.from({ length: n }).fill(0);

  let b = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b') {
      f[i + 1] = f[i];
      b += 1;
    } else {
      f[i + 1] = Math.min(f[i] + 1, b)
    }
  }

  return f[n]
};