// function foo(i) {
//   if (i < 0) {
//     return;
//   }
//   console.log(`begin: ${i}`);
//   foo(i - 1);
//   console.log(`end: ${i}`);
// }
// foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3

// function sayHello(i) {
//   if (i < 0) {
//     return;
//   }

//   return 'Hello' + sayHello(i - 1);
// }

// console.log(sayHello(3));


// const decrement = (num) => {
//   if(num === 0) return;
//   console.log('start', num);

//   decrement(num -1)
//   console.log('end', num);
// }
// decrement(5)

// let checkNumber = (number) => {

//   // Two base case conditions.....
//   if (number === 0) return (number + " is even");
//   if (number === 1) return (number + " is odd");
//   return checkNumber(number - 2);
// }
// console.log(checkNumber(5));


// Program to countdown till 1

// recursive function
// function counter(count) {

//   // display count
//   console.log(count);

//   // condition for stopping
//   if (count > 1) {

//     // decrease count
//     count = count - 1;

//     // call counter with new value of count
//     counter(count);
//   } else {

//     // terminate execution
//     return;
//   };
// };

// // access function
// counter(5);


// Recusive function
// function fictorila(num){
//   console.log(num)
//   if(num > 0) {
//     return num * fictorila(num -1);
//   } else {
//     return 1;
//   }
// }

// console.log(fictorila(3));

// const fibonacci = (n) => {
//   if (n <= 2){
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

// console.log(fibonacci(10));

// const reduce = (fn, acc, [cur, ...rest]) =>
//   cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
// console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45