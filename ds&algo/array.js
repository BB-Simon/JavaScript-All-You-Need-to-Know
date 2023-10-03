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
reverseStr(str)