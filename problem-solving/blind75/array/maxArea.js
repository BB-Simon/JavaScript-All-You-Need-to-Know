/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l < r) {
    const w = r - l;
    const h = Math.min(height[l], height[r]);
    const water = w * h;
    maxWater = Math.max(maxWater, water);

    if (height[l] < height[r]) {
      l += 1
    } else {
      r -= 1;
    }
  }

  return maxWater;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])