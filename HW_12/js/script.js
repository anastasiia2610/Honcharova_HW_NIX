'use strict';

//Task 1

// let div = document.body.firstElementChild;

// let ul = document.body.children[1];

// let li = document.body.lastElementChild.lastElementChild;

//Task 2

//let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
// }

//Task 3

// let table = document.getElementById('age-table');

// document.querySelectorAll('#age-table label');

// table.querySelector('td');

// document.querySelector('form[name="search"]');

// let inputs = form.querySelectorAll('input');

// inputs[inputs.length-1];

//Task 4

// for (let li of document.querySelectorAll('li')) {
//     let title = li.firstChild.data;
// }

//Task 5

// function clear(elem) {
//     for (let i=0; i < elem.childNodes.length; i++) {
//         elem.childNodes[i].remove();
//     }
//   }

//Task 6

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt("Введите текст для элемента списка", "");

//     if (!data) {
//         break;
//     }

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }

//Task 7

// for (let li of document.querySelectorAll('li')) {

//     let title = li.firstChild.data;

//     title = title.trim(); 

//     let count = li.getElementsByTagName('li').length;

//     alert(title + ': ' + count);
//   }

//Task 8

// function createCalendar(elem, year, month) {

//     let mon = month - 1; 
//     let d = new Date(year, mon);

//     let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

//     for (let i = 0; i < getDay(d); i++) {
//       table += '<td></td>';
//     }

//     while (d.getMonth() == mon) {
//       table += '<td>' + d.getDate() + '</td>';

//       if (getDay(d) % 7 == 6) { 
//         table += '</tr><tr>';
//       }

//       d.setDate(d.getDate() + 1);
//     }

//     if (getDay(d) != 0) {
//       for (let i = getDay(d); i < 7; i++) {
//         table += '<td></td>';
//       }
//     }

//     table += '</tr></table>';

//     elem.innerHTML = table;
//   }

//   function getDay(date) { 
//     let day = date.getDay();
//     if (day == 0) day = 7; 
//     return day - 1;
//   }

//   createCalendar(calendar, 2021, 6);

//Task 9

// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
