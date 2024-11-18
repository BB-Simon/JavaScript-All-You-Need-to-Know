/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;

    if(k === 0){
        return Array.from({length: n}).fill(0)
    }

    const extended_code = code.concat(code);
    if(k > 0){
        for(let i = 0; i < n; i++){
            code[i] = extended_code.slice(i+1, i+1+k).reduce((acc, x)=> acc+x, 0);
        }
    } else {
        k = Math.abs(k)
        for(let i = 0; i < n; i++){
            code[i] = extended_code.slice(i+n-k, i+n).reduce((acc, x)=> acc+x, 0);
        }
    }

    return code;
};