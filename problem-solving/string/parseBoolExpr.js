/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let stack = [];

  for (let char of expression) {
    if (char === ',' || char === '(') {
      continue; // Skip commas and opening brackets
    }

    if (char === 't' || char === 'f' || char === '!' || char === '&' || char === '|') {
      stack.push(char); // Push characters onto the stack
    }

    if (char === ')') {
      let hasTrue = false, hasFalse = false;

      // Evaluate the expression within the parentheses
      while (stack[stack.length - 1] !== '!' && stack[stack.length - 1] !== '&' && stack[stack.length - 1] !== '|') {
        let topValue = stack.pop();
        if (topValue === 't') hasTrue = true;
        if (topValue === 'f') hasFalse = true;
      }

      let operator = stack.pop(); // Get the operator (either !, &, or |)

      if (operator === '!') {
        stack.push(hasTrue ? 'f' : 't'); // Negate the value
      } else if (operator === '&') {
        stack.push(hasFalse ? 'f' : 't'); // AND operation
      } else if (operator === '|') {
        stack.push(hasTrue ? 't' : 'f'); // OR operation
      }
    }
  }

  return stack[stack.length - 1] === 't'; // Return final result

};