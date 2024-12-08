/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  const n = events.length;

  // Step 1: Sort events by their start time
  events.sort((a, b) => a[0] - b[0]);

  // Step 2: Create the suffix array for the maximum event value
  const suffixMax = Array(n).fill(0);
  suffixMax[n - 1] = events[n - 1][2]; // Initialize with the last event's value

  // Populate the suffixMax array
  for (let i = n - 2; i >= 0; i--) {
    suffixMax[i] = Math.max(events[i][2], suffixMax[i + 1]);
  }

  // Step 3: Find the maximum sum of values for two non-overlapping events
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    let left = i + 1,
      right = n - 1,
      nextEventIndex = -1;

    // Binary search to find the next non-overlapping event
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (events[mid][0] > events[i][1]) {
        nextEventIndex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // Update the max sum
    if (nextEventIndex !== -1) {
      maxSum = Math.max(maxSum, events[i][2] + suffixMax[nextEventIndex]);
    }

    // Consider taking only the current event
    maxSum = Math.max(maxSum, events[i][2]);
  }

  return maxSum;
};
