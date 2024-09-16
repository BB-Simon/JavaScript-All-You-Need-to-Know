/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  // Convert time from "HH:MM" to minutes since 00:00
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Step 1: Convert all times to minutes
  const minutes = timePoints.map(tp => timeToMinutes(tp));

  // Step 2: Sort the minutes
  minutes.sort((a, b) => a - b);

  // Step 3: Calculate the minimum difference between consecutive times
  let minDiff = Infinity; // Initialize to a large number

  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
  }

  // Step 4: Check the circular difference between the last and first time points
  const circularDiff = 1440 - minutes[minutes.length - 1] + minutes[0];
  minDiff = Math.min(minDiff, circularDiff);

  return minDiff;
};