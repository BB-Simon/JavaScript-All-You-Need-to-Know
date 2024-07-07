/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

  return function (x) {
    // return functions.reduceRight((acc, fn) => fn(acc), x)
    let res = x;

    for(let i = functions.length - 1; i >= 0; i--) {
      let fn = functions[i]
      res = fn(res)
    }

    return res;
  }
};


const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
console.log(fn(1)) // 9
