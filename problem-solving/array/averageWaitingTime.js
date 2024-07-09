/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let arrivedAt = 0;
  let avgWaitTime = 0;

  for (let c of customers) {
    arrivedAt = Math.max(arrivedAt, c[0]) + c[1];
    avgWaitTime += arrivedAt - c[0]
  }

  return avgWaitTime / customers.length
};