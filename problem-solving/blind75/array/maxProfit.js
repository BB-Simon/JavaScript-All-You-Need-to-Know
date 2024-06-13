function maxProfit(prices) {
  let buyingPrice = prices[0];
  let output = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    } else if ((prices[i] - buyingPrice) > output) {
      output = prices[i] - buyingPrice;
    }
  }
  return output;
};

// maxProfit([7, 1, 5, 3, 6, 4])