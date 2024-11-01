/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
            if (count < 3) {
                ans += s[i];
            }
        } else {
            count = 1;
            ans += s[i];
        }
    }

    return ans;

};