'use strict';

//Task 1

// let i = 3;
// while (i) {
//     alert(i--);
// }

//переменная i в данном случае равняется количеству итераций цикла
//первая итерация выведет нам 3, и i уже будет равно 2
//вторая - 2, і равно 1
//третья - 1, и і = 0, после этого цикл останавливается
//последне значение будет і = 0

// Task 2

// function numIncrease (a, b, c) {
//     let array = [a, b, c];

//     if (a < b && b < c) {
//         return array.map((item) => item * 2);
//     } else {
//         return array.map((item) => item * (-1)) ;
//     }
// }

//Task 3

// function numIncrease (a, b, c) {
//     let array = [a, b, c];

//     if (a < b && b < c) {
//         return array.map((item) => item * 2);
//     } else if (b < a && c < b) {
//         return array.map((item) => item * 2);
//     } else {
//         return array.map((item) => item * (-1)) ;
//     }
// }

//Task 4

// function getDotAndDistance(a, b, c) {
//     const firstDistance = Math.abs(a - b);
//     const secondDistance = Math.abs(a - c);
//     if (firstDistance > secondDistance) {
//         return `К точке А ближе точка C, их расстояние: ${secondDistance}`;
//     } else {
//         return `К точке А ближе точка B, их расстояние: ${firstDistance}`;        
//     }
// }

//Task 5

// function dotCoordinates (x, y) {
//     if (x === 0 && y === 0) {
//         return 0;
//     } else if (x === 0 && y !== 0) {
//         return 1;
//     }else if (x !== 0 && y === 0) {
//         return 2;
//     } else {
//         return 3;
//     }
// }

//Task 6

// function getDotQuarter (x, y) {
//     if (x > 0 && y > 0) {
//         return "Точка находится на І четверти";
//     } else if (x < 0 && y > 0) {
//         return "Точка находится на ІІ четверти";
//     } else if (x < 0 && y < 0) {
//         return "Точка находится на ІІІ четверти";
//     } else {
//         return "Точка находится на ІV четверти";
//     }
// }
// console.log(getDotQuarter(1, 1));
// console.log(getDotQuarter(-1, 1));
// console.log(getDotQuarter(-1, -1));
// console.log(getDotQuarter(1, -1));

//Task 7

// function rectangleVertex(x1, x2, x3, y1, y2, y3) {
//     if (x2 === x3 || y2 === y3) {
//         return `x4: ${x1}, y4: ${y1}`;
//     } else if (x3 === x1 || y3 === y1) {
//         return `x4: ${x2}, y4: ${y2}`;
//     } else {
//         return `x4: ${x3}, y4: ${y3}`;
//     }
// }

//Task 8

// function getDayOfYear(year) {
//     return (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) ? 366 : 365;
// }

//Task 9

// function getNumber(num) {
//     let result;

//     if (num === 0) {
//         result = "nullish";
//     } else if (num > 0) {
//         result = 'positive';
//     } else if (num < 0) {
//         result = 'negative';
//     } 

//     if (num === 0) {
//         result = "nullish";
//     } else if (num % 2 === 0) {
//         result += ' odd number';
//     } else if (num % 2 !== 0) {
//         result += ' even number';
//     }
//     return result;
// }


//Task 10

// function getRangeNumber(num) {
//     let result;

//     if (num > 99) {
//         result = "three-digit";
//     } else if (num <= 99 && num > 9) {
//         result = 'two-digit';
//     } else if (num <= 9) {
//         result = 'single-digit';
//     }

//     if (num % 2 === 0) {
//         result += ' odd number';
//     } else if (num % 2 !== 0) {
//         result += ' even number';
//     }
//     return result;
// }

//Task 11

// let i = 0;
// while (++i < 5) alert( i );

//От 1 до 4

// let i = 0;
// while (i++ < 5) alert( i );

//От 1 до 5

//Task 12

// for (let i = 0; i < 5; ++i) alert( i ); //От 0 до 4

// for (let i = 0; i < 5; i++) alert( i ); //От 0 до 4

//Task 13

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }

//Task 14

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

//Task 15

// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

//Task 16 

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }

//   alert( i ); 
// }

//Task 17

// let firstNumber = +prompt('Enter first number:');
// let secondNumber = +prompt('Enter second number:');

// function numbersAverage(a, b) {
//     return (a + b) / 2;
// }

// alert(numbersAverage(firstNumber, secondNumber));

//Task 18

// function getSquareNumber(num) {
//     return Math.sqrt(num);
// }


//Task 19 

// const firstNumber = +prompt('Enter first number:');
// const secondNumber = +prompt('Enter second number:');
// const thirdNumber = +prompt('Enter third number:');

// function getNumberSubstraction (...theArgs) {
//     let min = Math.min(...theArgs);
//     let max = Math.max(...theArgs);

//     alert(max - min);
// }

// getNumberSubstraction(firstNumber, secondNumber, thirdNumber);


//Task 20

// function oddNumberCheck (num) {
//     return num % 2 === 0 ? 'odd' : 'even';
// }

//Task 21

function getNumberDigitSum(num) {
    
}