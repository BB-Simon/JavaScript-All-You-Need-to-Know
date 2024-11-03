/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    return `${s}${s}`.includes(goal)


    // #Slolution 2
    // if(s.length !== goal.length) return false;
    
    // for(let i = 0; i < s.length; i++){
    //     console.log({s})
    //     if(s === goal) return true;
    //     s = s.slice(1) + s[0];
    // }

    // return false;
};