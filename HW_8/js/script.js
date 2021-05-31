'use strict';

//Task 1

//let name = 'Anastasiia';
//let admin = name;

//alert(admin);

//Task 2

//const - создаёт переменную, значение которой нельзя изменить.
//В JavaScript для именования переменных принято использовать camelCase.
//UPPER_CASE используют для постоянных значений, 
//поэтому для переменной age нельзя использовать заглавные буквы, 
//так как возраст меняется, и константой является только во время выполнения кода.
//Для birthday UPPER_CASE можно использовать, потому что день рождения является по сути константой,
// значение которой не меняется

//Task 3

// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` );

//Task 4

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

//Task 5

// let a = 1, b = 1;
// let c = ++a; 
// let d = b++; 

// console.log(c);
// console.log(d)

//Task 6

// let a = 2; //4
// let x = 1 + (a *= 2); //5

//Task 7 

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

//Task 8

// let userName = prompt('What is your name?')

// alert(`${userName}`);

//Task 9 

// if ("0") {
//     alert('Привет'); //да, выведется
// }

//Task 10

// let value = prompt('Какое "официальное" название JavaScript?', '');

//     if (value == 'ECMAScript') {
//       alert('Верно!');
//     } else {
//       alert('Не знаете? ECMAScript!');
//     }

//Task 11

// let value = prompt('Введите число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

//Task 12

// result = (a + b < 4) ? 'Мало' : 'Много';

//Task 13

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

//Task 14

// alert( null || 2 || undefined); // 2

//Task 15

// alert( alert(1) || 2 || alert(3) ); //1, а затем 2

//Task 16

// alert( 1 && null && 2 ); //null

//Task 17

// alert( alert(1) && alert(2) );// 1, а затем undefined

//Task 18

// alert( null || 2 && 3 || 4 ); //3

//Task 19

// if (age >= 14 && age <= 90);

//Task 20 

//if (!(age >= 14 && age <= 90))

// if (age < 14 || age > 90);

//Task 21

//if (-1 || 0) alert( 'first' );

//if (-1 && 0) alert( 'second' );

//if (null || -1 && 1) alert( 'third' );

//Task 22

// let userName = prompt("Who's there?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "I do not know you" );
// }

//Task 23

// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }

//Task 24

// let a = +prompt('?', '');

// switch (a) {
//   case 0:
//     alert('0');
//     break;

//   case 1:
//     alert('1');
//     break;

//   case 2:
//   case 3:
//     alert('2, 3');
//     break;
// }

//Task 25, 26, 27

// let num = +prompt("Enter the numder", "");

// if(num > 0) {
//     console.log(num+1);
// } else if(num < 0){
//     console.log(num-2);
// } else if (num === 0) {
//     num = 10;
//     console.log(num);
// }

//Task 28

// let a = 5, b = -2, c = 2;

// function countNumber (a, b, c) {
//     let count = 0;
//     for(let i = 0; i < arguments.length; i++){
//         if (arguments[i] > 0){
//             count++;
//         }
//     } 
//     return count;
// }

// console.log(countNumber(a, b, c ));

//Task 29

// let a = 5, b = -2, c = 2;

// function countNumber2 (a, b, c) {
//     let countPositive = 0;
//     let countNegative = 0;
//     for(let i = 0; i < arguments.length; i++){
//         if (arguments[i] > 0){
//             countPositive++;
//         } else {
//             countNegative++;

//         }
//     } 
//     return console.log(`positive counter: ${countPositive}, negative counter: ${countNegative}`);
// }

// console.log(countNumber2(a, b, c ));

//Task 30

// let a = 2;
// let b = 6;

// console.log(Math.max(a, b));

//Task 31

// let array = [11, 5];

// function minIndex (array) {
//     let min = Math.min(array[0], array[1]);
//     console.log(array.indexOf(min));
// }

// minIndex(array);

//Task 32

// let array = [11, 5];

// function minAndMax (array) {
//     let min = Math.min(array[0], array[1]);
//     let max = Math.max(array[0], array[1]);
//     console.log(`Max: ${max}, Min: ${min}`);
//     }

//     minAndMax(array);

//Task 33 

// function numbers(){
    
//     let a = 14.88;
//     let b = 5.25;
//     console.log(`Изначально: a: ${a}, b: ${b}`);
//     let temp;
  
//     if(a > b){
//       temp = b;
//       b = a;
//       a = temp;
//     }
//     return console.log(`Результат: a: ${a}, b: ${b}`);
// }
// numbers();

//Task 34

// function numbers(){
    
//     let a = 10;
//     let b = 11;
//     console.log(`Изначально: a: ${a}, b: ${b}`);
      
//     if(a !== b){
//         a = a + b;
//         b = a;
//     } else{
//         a = 0;
//         b = 0;
//     }
    
//     return console.log(`Результат: a: ${a}, b: ${b}`);
// }
// numbers();

//Task 35

// function maxNumber(){
    
//     let a = 10;
//     let b = 11;
//     console.log(`Изначально: a: ${a}, b: ${b}`);
      
//     if(a !== b){
//         a = Math.max(a, b);
//         b = a;
//     } else{
//         a = 0;
//         b = 0;
//     }
    
//     return console.log(`Результат: a: ${a}, b: ${b}`);
// }
// maxNumber();

//Task 36 

// let a = 5, b = 3, c = 10;

// function minNumber (a, b, c) {
    
//     return Math.min(a, b, c);
    
// }
//     console.log(minNumber(a, b, c));

//Task 37

// function middleNumber (...theArgs){ // Оставшиеся параметры

// let min = Math.min(...theArgs);
// let max = Math.max(...theArgs);

// let middle = Math.floor((min + max) / 2);

// return middle;
// }

// console.log(middleNumber(1, 5, 12))

//Task 38

// function minAndMax (...theArgs){ 

//     let min = Math.min(...theArgs);
//     let max = Math.max(...theArgs);

//     return console.log(`Min: ${min}, Max: ${max}`);

// }

// minAndMax(1, 5, 12)
    
//Task 39 

// function maxNumbersSum (a, b, c) {

//     let sum = 0;

//     let array = [a, b, c];
    
//     for (let i = 0; i < 2; i++) {
//         let largest = Math.max.apply(Math, array);

//         let index = array.indexOf(largest);
        
//         array.splice(index, 1);
//         sum = sum +largest;

//     }
//     console.log(sum);

// }
// maxNumbersSum(1, 2, 4)

//Task 40

// function anotherNumber(a, b, c){

//     let array = [a, b, c];

//     if(a === b) {
//         return array.indexOf(c);
//     } else if (b === c) {
//         return array.indexOf(a)
//     } else if (a === c) {
//         return array.indexOf(b)
//     }
// }

// console.log(anotherNumber(3,1,3))
