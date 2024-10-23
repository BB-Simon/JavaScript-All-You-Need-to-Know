/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    function dfs(arr) {
        if (!arr.length) return;

        // Calculate the total sum of all children's values in the current level
        let totalSum = arr.reduce((sum, node) => {
            if (node.left) sum += node.left.val;
            if (node.right) sum += node.right.val;
            return sum;
        }, 0);

        const nextLevel = [];
        
        // Update children's values and prepare the next level's node list
        for (const node of arr) {
            let curSum = 0;
            if (node.left) curSum += node.left.val;
            if (node.right) curSum += node.right.val;
            
            if (node.left) {
                node.left.val = totalSum - curSum;
                nextLevel.push(node.left);
            }
            if (node.right) {
                node.right.val = totalSum - curSum;
                nextLevel.push(node.right);
            }
        }

        // Recurse to the next level
        dfs(nextLevel);
    }

    // Initialize the root's value to 0 and start DFS
    root.val = 0;
    dfs([root]);
    return root;
};