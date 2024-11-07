/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let cnt = candidates.reduce((count, candidate) => count + ((candidate & (1 << i)) ? 1 : 0), 0);
        ans = Math.max(ans, cnt);
    }
    return ans;
};