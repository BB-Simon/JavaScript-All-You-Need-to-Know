// Given an array (or string), the task is to reverse the array/string.
function reverse(arr){
  let start = 0;
  let end = arr.length-1;

  while(start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }
  return arr;
}


// let arr = [1, 2, 3, 4, 5, 6]
// reverse(arr)

function reverseStr(str) {
  str = str.split('')
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start += 1;
    end -= 1;
  }
  return str.join('');
}

let str = 'simon'
// reverseStr(str)

function search(arr, n){
  // let arr = [1, 2, 3,, 4, 5, 6,]

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === n){
      return i;
    }
  }

  return -1;
}

// console.log(search(12));

function insertElement(arr, pos, element){
  const n = arr.length;

  for(let i = n - 1; i >= pos; i--){
    arr[i + 1] = arr[i];
  }
  arr[pos] = element;

  return arr;
}

// const arr = insertElement([1, 23, 45, 54, 6], 1, 50);

function removeElement(arr, element){
  const pos = search(arr, element);
  if(pos === -1){
    console.log('Element not found');
    return;
  }

  for(let i = pos; i < arr.length; i++){
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
}

// const arr = [1, 23, 24, 45, 54, 6];
// removeElement(arr, 24);

/** 
  Search in sorted array wtib binary search algorithm
  @arr Array
  @element Element to find
  @return: Number Position of targeted element in the array
**/
function searchInSortedArray(arr, low, high, element){
  if(high < low){
    return -1;
  }

  let mid = Math.trunc((low + high) / 2);
  if (element === arr[mid]){
    return mid
  }
  
  if (element > arr[mid]){
    return searchInSortedArray(arr, (mid + 1), high, element)
  }

  if(element < arr[mid]){
    return searchInSortedArray(arr, low, (mid - 1), element)
  }
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// const idx = searchInSortedArray(arr, 0, arr.length - 1, -23);

function insertInSortedArray(arr, element) {
  let n = arr.length -1;
  let i;
  for(i = n; (i >= 0 && arr[i] > element); i--) {
    arr[i + 1] = arr[i];
  }
  arr[i + 1] = element;
}

// const arr = [1, 2, 3, 4, 6, 7];
// insertInSortedArray(arr, 17)

function printSubArrays(arr, start, end) {
  if (end === arr.length){
    return;
  } else if(start > end){
    printSubArrays(arr, 0, end + 1);
  } else {
    // console.log(arr[start:end+1]);
    let a = []
    for(let i = start; i < end; i++){
      a.push(arr[i])
    }
    a.push(arr[end]);
    // console.log(a);
    printSubArrays(arr, start + 1, end)
  }
}

const arr = printSubArrays([1, 2], 0, 0)

function print3largest(arr){
  // arr.sort((a, b) => a - b).reverse();
  // console.log(arr[0]);
  // console.log(arr[1]);
  // console.log(arr[2]);

  // arr.sort((a, b) => a - b);
  // let count = 1, check = 0;
  // for(let i = 1; i <= arr.length; i++){
  //   if(count < 4){
  //     if (check !== arr[arr.length - i]){
  //       console.log(arr[arr.length - i]);
  //       check = arr[arr.length - i];
  //       count++;
  //     }
  //   } else {
  //     break;
  //   }
  // }

  let first, second, third;

  if(arr.length < 3){
    return;
  }

  third = first = second = Number.MIN_VALUE;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > first){
      third = second;
      second = first;
      first = arr[i];
    } else if(arr[i] > second && arr[i] !== first){
      third = second;
      second = arr[i];
    } else if(arr[i] > third && arr[i] !== second){
      third = arr[i];
    }
  }

  // console.log(first);
  // console.log(second);
  // console.log(third);
}

// print3largest([12, 45, 1, -1, 45, 54, 45, 45, 45, 23, 5, 0, -10])

function printSecondLargestElementInArray(arr){
  if(arr.length < 2){
    console.log('Invalid');
    return;
  }

  // arr.sort((a,  b) => a - b);
  // for(var i = (arr.length - 2); i >= 0; i--){
  //   console.log(i);
  //   if(arr[i] !== arr[arr.length - 1]) {
  //     console.log(arr[i]);
  //     return;
  //   }
  // }

  // Set datastructure
  // let s = new Set(arr);
  // let v = Array.from(s);
  // v.sort((a, b) => a - b);
  // console.log(v[v.length - 2]);

  let count = {}
  for(let i = 0; i < arr.length; i++){
    if(arr[i] in count){
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
    }
  }

  if(count.length === 1) {
    console.log('invalid');
    return;
  }
  let keys = Object.keys(count)
  // console.log(keys[keys.length - 2]);
}

// printSecondLargestElementInArray([12, 3, 45, 3, 25, 34, 25, 44, 44])

// Utility function to swap two elements of an array 
function swap(arr, j, i) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function pushZerosToEnd(arr){
  // let count = 0;
  // for(let i = 0; i < arr.length; i++){
  //   if(arr[i] !== 0){
  //     arr[count] = arr[i];
  //     count++;
  //   }
  // }
  
  // while(count < arr.length){
  //   arr[count] = 0;
  //   count+=1;
  // }

  let j = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      swap(arr, j, i)
      j+=1;
    }
  }
}

// pushZerosToEnd([0, 1,2,43, 41, 23, 0, 23, 2, 3, 0, 1, 6, 4, 0])


function sortArrayInWave(arr){
  // arr.sort((a, b) => a - b);
  // for(var i = 0; i < arr.length - 1; i+=2){
  //   let temp = arr[i];
  //   arr[i] = arr[i+1];
  //   arr[i+1] = temp;
  // }

  for(let i = 0; i < arr.length; i+=2){
    if(arr[i] < arr[i - 1]){
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    } else if(arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

// sortArrayInWave([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


/**
 * Sort an array which contain 1 to n values
 * @param {*Array} arr 
 * @returns sorted array
 */
// function sort(arr){
//   let i = 0;
//   while(i < arr.length){
//     let correct = arr[i] - 1;
//     if(arr[correct] !== arr[i]){
//       let temp = arr[i];
//       arr[i] = arr[correct];
//       arr[correct] = temp;
//     } else {
//       i = i+1
//     }
//   }
//   return arr;
// }

// // sort([3, 2, 5, 6, 1, 4])

function findSingle(arr){
  for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=0; j<arr.length; j++){
      if(arr[i] == arr[j]){
        count++;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }

  return -1;
}

// let el = findSingle([2, 3, 5, 1,1,2, 6, 6, 9])

function leaderInArray(arr){
  // for(let i = 0; i < arr.length; i++){
  //   let j;
  //   for(j = i + 1; j < arr.length; j++){
  //     if(arr[i] <= arr[j]) {
  //      break
  //     }
  //   }
    
  //   if(j === arr.length){
  //     console.log(arr[i]);
  //   }
  // }

  const ans = []
  let max_from_right = arr[arr.length - 1];
  ans.unshift(max_from_right);

  for(let i = arr.length - 2; i >=0; i--){
    if(max_from_right < arr[i]){
      max_from_right = arr[i];
      ans.unshift(max_from_right);
    }
  }
}

// leaderInArray([2, 4, 12, 45, 23, 43, 21, 12])


function sort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    console.log(correct);
    if (arr[correct] !== arr[i]) {
      let temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i = i + 1
    }
  }
  return arr;
}

console.log(sort([3, 2, 5, 6, 1, 4]))