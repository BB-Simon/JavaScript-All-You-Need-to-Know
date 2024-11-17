/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefixSum = Array(n + 1).fill(0);

    // Compute prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    const dq = []; // Deque to maintain indices
    let minLength = Infinity;

    for (let i = 0; i <= n; i++) {
        // Check for subarray sums >= k
        while (dq.length > 0 && prefixSum[i] - prefixSum[dq[0]] >= k) {
            minLength = Math.min(minLength, i - dq.shift());
        }

        // Maintain monotonicity of the deque
        while (dq.length > 0 && prefixSum[i] <= prefixSum[dq[dq.length - 1]]) {
            dq.pop();
        }

        dq.push(i);
    }

    return minLength === Infinity ? -1 : minLength;
};