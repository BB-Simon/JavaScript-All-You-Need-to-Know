/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    function dfs(candidates, index, target, path, res) {
        if (target === 0) {
            res.push([...path]); // Copy the current path and add it to the result
            return;
        }
        if (target < 0) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) { // Skip duplicates
                continue;
            }
            path.push(candidates[i]);
            dfs(candidates, i + 1, target - candidates[i], path, res);
            path.pop(); // Backtrack
        }
    }

    candidates.sort((a, b) => a - b);
    const res = [];
    const path = [];
    dfs(candidates, 0, target, path, res);
    return res;
};