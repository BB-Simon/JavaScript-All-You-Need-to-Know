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
