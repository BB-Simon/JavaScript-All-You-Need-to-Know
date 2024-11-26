/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  // USING TWO POINTERS
  const n = word.length;
  let l = 0,
    r = 0;
  let ans = [];

  while (r < n) {
    const c = word[l];

    // Move `r` to the right while characters match
    while (r < n && word[r] === c) {
      r++;
    }

    const count = r - l;
    const q = Math.floor(count / 9);
    const rem = count % 9;

    // Add compressed parts to the result
    for (let i = 0; i < q; i++) {
      ans.push("9" + c);
    }
    if (rem > 0) {
      ans.push(rem + c);
    }

    // Move the left pointer
    l = r;
  }

  return ans.join("");
};
