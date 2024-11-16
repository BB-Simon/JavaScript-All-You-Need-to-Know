/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    const res = [];
    let l = 0; // Left pointer
    let consecCnt = 1; // Counter for consecutive numbers

    for (let r = 0; r < nums.length; r++) {
        if (r > 0 && nums[r - 1] + 1 === nums[r]) {
            consecCnt++;
        }

        if (r - l + 1 > k) {
            if (nums[l] + 1 === nums[l + 1]) {
                consecCnt--;
            }
            l++;
        }

        if (r - l + 1 === k) {
            res.push(consecCnt === k ? nums[r] : -1);
        }
    }

    return res;
};




