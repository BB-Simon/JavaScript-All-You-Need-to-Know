/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  if (num === 1) {
    return 0;
  }

  const bin = num.toString(2).split('');

  for (let i = 0; i < bin.length; i++) {
    if (parseInt(bin[i]) === 0) {
      bin[i] = 1
    } else {
      bin[i] = 0
    }
  }

  return parseInt(bin.join(''), 2)
};