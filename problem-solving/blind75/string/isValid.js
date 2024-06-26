/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) {
    return false
  }
  const chars = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let stack = []
  for (let c of s) {
    if (Object.keys(chars).includes(c)) {
      stack.push(c)
    } else {
      if (chars[stack[stack.length - 1]] === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0 ? true : false;


};

isValid("()[]{}")
