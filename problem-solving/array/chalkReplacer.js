/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const totalChalkNeeded = chalk.reduce((a, b) => a + b, 0);
  let remainingChalk = k % totalChalkNeeded;

  for (let i = 0; i < chalk.length; i++) {
    if (remainingChalk < chalk[i]) {
      return i;
    }
    remainingChalk -= chalk[i];
  }

  return 0;
};