/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b);

  let endPtr = 0;
  let groupCount = 0;

  for (let start of startTimes) {
    if (start > endTimes[endPtr]) {
      endPtr += 1;
    } else {
      groupCount += 1;
    }
  }

  return groupCount;

};