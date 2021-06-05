'use strict';

//Task 1

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }

//Task 2 

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

//Task 3

// function readNumber() {
//     let num;

//     do {
//       num = prompt("Enter your number:", 0);
//     } while ( !isFinite(num) );

//     if (num === null || num === '') return null;

//     return +num;
//   }

//   alert(`Number: ${readNumber()}`);

//Task 4

// function randomNumber(min, max) {
//     return min + Math.random() * (max - min);
//   }

//Task 5

// function randomIntegerNumber(min, max) {
//     let randomize = min + Math.random() * (max + 1 - min);
//     return Math.floor(randomize);
//   }

//Task 6

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }

//Task 7

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }

//Task 8

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

//Task 9

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }

//Task 10

// function sumInput() {

//     let numbers = [];

//     while (true) {

//         let value = prompt("Enter your number:", 0);

//         if (value === "" || value === null || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

//Task 11

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partOfSum = 0;

//     for (let item of arr) {
//         partOfSum += item;
//         maxSum = Math.max(maxSum, partOfSum);
//         if (partOfSum < 0) partOfSum = 0;
//     }

//     return maxSum;
// }

//Task 12

//Работают одинаково

//Task 13

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

//Task 14

//   function min(a, b) {
//     return a < b ? a : b;
//   }

//Task 15

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//     alert(`This power ${n} is not correct`);
// } else {
//     alert(pow(x, n));
// }

//Task 16

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Agree?",
//     () => alert("You agreed"),
//     () => alert("You cancelled your decision")
//   );

//Task 17

// const monthlyIncome = 3333;

// const monthlyExpenses = 1750;

// const PALM_PRICE = 8000;

// function palmBuy(price, income, expenses){
//     return Math.trunc(price / (income - expenses));
// }
// console.log(palmBuy(PALM_PRICE, monthlyIncome, monthlyExpenses));


//Task 18

// function getSumNegativeNum(){
//     const arrNum = [];

//     for(let i = 0; i < 10; i++){
//         let num = +prompt('Enter number:');
//         if(Math.sign(num) === -1){
//             arrNum.push(num);
//         }
//     }

//     return arrNum.reduce((acc, elem) => acc + elem, 0)
// }


//Task 19

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// let shoppingCart = fruits;

// shoppingCart.push("Банан");

// alert( fruits.length );

//Task 20

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");

//Task 21

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();