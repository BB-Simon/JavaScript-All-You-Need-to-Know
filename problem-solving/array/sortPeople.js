/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  let obj = {};

  for(let i = 0; i < names.length; i++) {
    obj[heights[i]] = names[i]
  }

  return Object.values(obj).reverse();
};

const names = ["Mary", "John", "Emma"];

const heights = [180, 165, 170]
sortPeople(names, heights)