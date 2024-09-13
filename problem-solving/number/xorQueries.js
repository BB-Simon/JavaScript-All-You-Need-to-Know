/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  // Accumulate XOR in the array
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    arr[i] ^= arr[i - 1];
  }

  // Prepare the answer array
  const ans = new Array(queries.length).fill(0);

  // Loop through each query
  queries.forEach((query, i) => {
    const [q0, qN] = query;
    if (q0 === 0) {
      ans[i] = arr[qN];
    } else {
      ans[i] = arr[qN] ^ arr[q0 - 1];
    }
  });

  return ans;
};