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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    // Initialize arrays to store heights and node information
    const heights = new Array(50000).fill(0);  // Heights of leaf nodes
    const d = new Array(100001).fill(0);       // Depth of each node
    const l = new Array(100001).fill(0);       // Left index for each node
    const r = new Array(100001).fill(0);       // Right index for each node
    let lenLeaves = 0;                         // Counter for leaf nodes

    // DFS function to traverse the tree and calculate necessary values
    function search(node, h) {
        if (!node) return;
        
        d[node.val] = h;  // Store current node's depth

        // Leaf node
        if (!node.left && !node.right) {
            heights[lenLeaves] = h;               // Store leaf height
            l[node.val] = r[node.val] = lenLeaves; // Same indices for leaf
            lenLeaves++;
            return;
        }
        
        l[node.val] = lenLeaves;  // Store left index for the current node

        // Recursively traverse left and right children
        if (node.left) search(node.left, h + 1);
        if (node.right) search(node.right, h + 1);

        r[node.val] = lenLeaves - 1;  // Store right index after children processed
    }

    // Process the tree starting from root
    search(root, 0);

    const n = lenLeaves;                    // Total number of leaf nodes
    const maxl = new Array(n).fill(0);       // Max heights from left
    const maxr = new Array(n).fill(0);       // Max heights from right

    // Build prefix and suffix maximum arrays
    for (let i = 1; i < n; i++) {
        maxl[i] = Math.max(maxl[i - 1], heights[i - 1]);          // Max height from left
        maxr[n - i - 1] = Math.max(maxr[n - i], heights[n - i]);  // Max height from right
    }

    const result = [];

    // Process each query
    for (let query of queries) {
        const maxLeft = maxl[l[query]];    // Max height to the left of query node
        const maxRight = maxr[r[query]];   // Max height to the right of query node
        result.push(Math.max(maxLeft, maxRight, d[query] - 1)); // Max of left, right, or depth-1
    }

    return result;
};