/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  // TODO: this solution time limit exceeded
  // let res = 0;
  // for(let i = 0; i < rating.length; i++){
  //     for(let j = i+1; j < rating.length; j++){
  //         for(let k = j+1; k < rating.length; k++){
  //             if(
  //                 rating[i] < rating[j] && rating[j] < rating[k] || rating[i] > rating[j] && rating[j] > rating[k]
  //             ) {
  //                 res+=1;
  //             }
  //         }
  //     }
  // }
  // return res;

  let n = rating.length;
  let res = 0;

  for (let j = 0; j < n; j++) {
    let rightLess = 0, rightMore = 0, leftLess = 0, leftMore = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) rightLess++;
      if (rating[i] > rating[j]) rightMore++;
    }

    for (let k = j + 1; k < n; k++) {
      if (rating[k] < rating[j]) leftLess++;
      if (rating[k] > rating[j]) leftMore++;
    }

    res += rightLess * leftMore + rightMore * leftLess;
  }

  return res;
    
};