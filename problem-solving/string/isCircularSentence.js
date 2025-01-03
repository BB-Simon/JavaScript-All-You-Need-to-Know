/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let strArr = sentence.split(" ");
    if(strArr[0][0] !== strArr[strArr.length - 1][strArr[strArr.length - 1].length - 1]) {
        return false;
    }

    for(let i = 0; i < strArr.length - 1; i++){
        if(strArr[i][strArr[i].length - 1] !== strArr[i + 1][0]) {
            return false;
        }
    }
    return true;
};