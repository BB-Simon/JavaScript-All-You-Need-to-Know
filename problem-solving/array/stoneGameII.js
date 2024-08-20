/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    
    const dp = Array.from({ length: n }, () => Array(n + 1).fill(0));
    const suffixSum = Array(n).fill(0);
    suffixSum[n - 1] = piles[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let m = 1; m <= n; m++) {
            if (i + 2 * m >= n) {
                dp[i][m] = suffixSum[i];
            } else {
                for (let x = 1; x <= 2 * m; x++) {
                    dp[i][m] = Math.max(dp[i][m], suffixSum[i] - dp[i + x][Math.max(m, x)]);
                }
            }
        }
    }
    
    return dp[0][1];
};