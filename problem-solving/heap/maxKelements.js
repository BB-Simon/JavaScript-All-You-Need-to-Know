/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  // Helper to push into the max-heap (using negative values to simulate max-heap)
  const pushHeap = (heap, val) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent] >= heap[i]) break;
      [heap[i], heap[parent]] = [heap[parent], heap[i]];
      i = parent;
    }
  };

  // Helper to pop the largest element from the heap
  const popHeap = (heap) => {
    const root = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      const n = heap.length;
      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;

        if (left < n && heap[left] > heap[largest]) {
          largest = left;
        }
        if (right < n && heap[right] > heap[largest]) {
          largest = right;
        }
        if (largest === i) break;
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        i = largest;
      }
    }
    return root;
  };

  // Initialize max heap (with negative values to simulate max-heap behavior)
  const maxHeap = [];
  for (let num of nums) {
    pushHeap(maxHeap, num);
  }

  let score = 0;

  for (let i = 0; i < k; i++) {
    // Pop the largest element
    let x = popHeap(maxHeap);
    score += x;

    // If x is 1, no need to divide further, just add the remaining iterations' count
    if (x === 1) {
      score += k - 1 - i;
      break;
    }

    // Push back the divided element
    let newVal = Math.ceil(x / 3);
    pushHeap(maxHeap, newVal);
  }

  return score;
};