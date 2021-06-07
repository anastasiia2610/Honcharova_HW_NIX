'use strict';

//Task 1

// function copySorted(arr) {
//     return arr.slice().sort();
//   }

//   let arr = ["HTML", "JavaScript", "CSS"];

//   let sorted = copySorted(arr);

//Task 2

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

//Task 3

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }

//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 29 };

//   let arr = [ vasya, petya, masha ];


//Task 4

// function unique(arr) {
//     let result = [];

//     for (let str of arr) {
//         if (!result.includes(str)) {
//             result.push(str);
//         }
//     }

//     return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

//Task 5

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }

//Task 6

// function inBetween(a, b) {
//     return function(x) {
//       return x >= a && x <= b;
//     };
//   }

//   let arr = [1, 2, 3, 4, 5, 6, 7];

//   function inArray(arr) {
//     return function(x) {
//       return arr.includes(x);
//     };
//   }

//   let arr = [1, 2, 3, 4, 5, 6, 7];

//Task 7

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }

//Task 8

// const fib = n => {

//     let a = 1,
//         b = 1;

//     for (let i = 3; i <= n; i++) {

//         let c = a + b;
//         a = b;
//         b = c;
//     }

//     return b;
// }

