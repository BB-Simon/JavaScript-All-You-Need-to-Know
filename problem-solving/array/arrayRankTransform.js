/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let uniq = Array.from(new Set(arr)).sort((a, b) => a -b);
    let obj = uniq.reduce((acc, el, i) => {
        acc[el] = i+1;
        return acc;
    }, {})

    for(let j = 0; j < arr.length; j++){
        arr[j] = obj[arr[j]];
    }
  
    return arr;
};