/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const k = nums.length;
    const minHeap = []; // Custom min-heap
    let maxValue = -Infinity;
    
    // Helper to push into the heap while maintaining the heap property
    const pushHeap = (arr) => {
        minHeap.push(arr);
        let i = minHeap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (minHeap[parent][0] <= minHeap[i][0]) break;
            [minHeap[i], minHeap[parent]] = [minHeap[parent], minHeap[i]];
            i = parent;
        }
    };
    
    // Helper to pop from the heap while maintaining the heap property
    const popHeap = () => {
        const root = minHeap[0];
        const last = minHeap.pop();
        if (minHeap.length > 0) {
            minHeap[0] = last;
            let i = 0;
            const n = minHeap.length;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;
                
                if (left < n && minHeap[left][0] < minHeap[smallest][0]) {
                    smallest = left;
                }
                if (right < n && minHeap[right][0] < minHeap[smallest][0]) {
                    smallest = right;
                }
                if (smallest === i) break;
                [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
                i = smallest;
            }
        }
        return root;
    };
    
    // Initialize heap with first element from each list
    for (let i = 0; i < k; i++) {
        pushHeap([nums[i][0], i, 0]);
        maxValue = Math.max(maxValue, nums[i][0]);
    }
    
    let rangeStart = 0, rangeEnd = Infinity;
    
    while (minHeap.length > 0) {
        const [minValue, row, col] = popHeap();
        
        // Update the smallest range
        if (maxValue - minValue < rangeEnd - rangeStart) {
            rangeStart = minValue;
            rangeEnd = maxValue;
        }
        
        // Move to the next element in the current list
        if (col + 1 < nums[row].length) {
            const nextValue = nums[row][col + 1];
            pushHeap([nextValue, row, col + 1]);
            maxValue = Math.max(maxValue, nextValue);
        } else {
            break; // One list is exhausted
        }
    }
    
    return [rangeStart, rangeEnd];
};