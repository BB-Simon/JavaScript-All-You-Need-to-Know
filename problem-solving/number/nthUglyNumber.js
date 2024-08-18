/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const primes = [2, 3, 5];
  const nextUgly = [2, 3, 5];
  const increase = [1, 1, 1];
  const arr = [1];

  for (let i = 1; i < n; i++) {
    const smallest = Math.min(...nextUgly);
    arr.push(smallest);

    for (let j = 0; j < 3; j++) {
      if (nextUgly[j] === smallest) {
        increase[j] += 1;
        nextUgly[j] = primes[j] * arr[increase[j] - 1];
      }
    }
  }

  return arr[arr.length - 1];
};