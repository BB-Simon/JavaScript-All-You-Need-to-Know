/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let low = 1;
    let high = Math.max(...quantities);
    let res = 0;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        // Calculate the number of stores needed if each store has a maximum of `mid` items
        let storesNeeded = quantities.reduce((acc, quantity) => acc + Math.ceil(quantity / mid), 0);

        if (storesNeeded <= n) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return res;
};