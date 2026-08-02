/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
  let p1_pick_first_index = 0;
  let p1_pick_last_index = 0;
  let p2_pick_first_index = 0;
  let p2_pick_last_index = 0;

  const scores = [...nums];
  const scores2 = [...nums];

  for (let i = 0; i < nums.length; i += 2) {
    console.log({ scores, scores2 });
    p1_pick_first_index = p1_pick_first_index += scores.length ? scores[0] : 0;
    scores.splice(0, 1);
    console.log({ scores });
    p2_pick_first_index = p2_pick_first_index += scores.length ? scores[0] : 0;
    scores.splice(0, 1);

    p1_pick_last_index = p1_pick_last_index += scores2.length ? scores2[scores2.length - 1] : 0;
    scores2.pop();
    // scores2.splice(scores2.length - 1, 1);
    console.log({ scores2 });
    p2_pick_last_index = p2_pick_last_index += scores2.length ? scores2[scores2.length - 1] : 0;
    scores2.pop();
    // scores2.splice(scores2.length - 1, 1);
  }

  console.log(p1_pick_first_index, p2_pick_first_index);
  console.log(p1_pick_last_index, p2_pick_last_index);

  if (p1_pick_first_index >= p2_pick_first_index || p1_pick_last_index >= p2_pick_last_index)
    return true;
  return false;
};

const res = predictTheWinner([2, 4, 55, 6, 8]);

console.log(res);
