/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let res = "";
  let pointer = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[pointer]) {
      res += " " + s[i];
      pointer++;
    } else {
      res += s[i];
    }
  }

  return res;
};
