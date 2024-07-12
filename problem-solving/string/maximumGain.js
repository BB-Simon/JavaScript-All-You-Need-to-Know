/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  function removeSubstring(str, first, second, points) {
    const stack = [];
    let score = 0;

    for (let char of str) {
      if (stack[stack.length - 1] === first && char === second) {
        stack.pop();
        score += points;
      } else {
        stack.push(char);
      }
    }

    return {
      s: stack.join(''),
      score,
    }
  }

  let score1, score2;
  if (x > y) {
    const { s: str1, score: s1 } = removeSubstring(s, 'a', 'b', x)
    score1 = s1;
    s = str1
    const { s: str2, score: s2 } = removeSubstring(s, 'b', 'a', y)
    score2 = s2;
    s = str2
  } else {
    const { s: str1, score: s1 } = removeSubstring(s, 'b', 'a', y)
    score1 = s1;
    s = str1
    const { s: str2, score: s2 } = removeSubstring(s, 'a', 'b', x)
    score2 = s2;
    s = str2
  }

  return score1 + score2
};