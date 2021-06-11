'use strict';

//Task 1

// function showNotification({
//     top = 0,
//     right = 0,
//     className,
//     html
// }) {

//     let notification = document.createElement('div');
//     notification.className = "notification_modal";
//     if (className) {
//         notification.classList.add(className);
//     }

//     notification.style.top = top + 'px';
//     notification.style.right = right + 'px';

//     notification.innerHTML = html;
//     document.body.append(notification);

//     setTimeout(() => notification.remove(), 1500);
// }


// let i = 1;
// setInterval(() => {
//     showNotification({
//         top: 10,
//         right: 10,
//         html: 'Hello ' + i++,
//         className: "welcome_modal"
//     });
// }, 2000);

//Task 2

// document.onclick = function(e) { 
//     coords.innerHTML = e.clientX + ':' + e.clientY;
//   };

//   let fieldCoords = field.getBoundingClientRect();

//   let answer = [
//     [ 
//       fieldCoords.left,
//       fieldCoords.top
//     ],
//     [ 
//       fieldCoords.right,
//       fieldCoords.bottom
//     ],
//     [ 
//       fieldCoords.left + field.clientLeft,
//       fieldCoords.top + field.clientTop
//     ],
//     [ 
//       fieldCoords.left + field.clientLeft + field.clientWidth,
//       fieldCoords.top + field.clientTop + field.clientHeight
//     ]
//   ];

//   answer.join('  ');

//Task 3

// function positionAt(anchor, position, elem) {

//     let anchorCoords = anchor.getBoundingClientRect();

//     switch (position) {
//       case "top":
//         elem.style.left = anchorCoords.left + "px";
//         elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//         break;

//       case "right":
//         elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//         elem.style.top = anchorCoords.top + "px";
//         break;

//       case "bottom":
//         elem.style.left = anchorCoords.left + "px";
//         elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//         break;
//     }

//   }

//   function showNote(anchor, position, html) {

//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);

//     positionAt(anchor, position, note);
//   }


//   let blockquote = document.querySelector('blockquote');

//   showNote(blockquote, "top", "note above");
//   showNote(blockquote, "right", "note at the right");
//   showNote(blockquote, "bottom", "note below");

//Task 4

// document.getElementById('hider').onclick = function() {
//     document.getElementById('text').hidden = true;
//   }

//Task 5

// field.onclick = function (event) {

//     let fieldCoords = this.getBoundingClientRect();

//     let ballCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//         left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//     };

//     if (ballCoords.top < 0) ballCoords.top = 0;

//     if (ballCoords.left < 0) ballCoords.left = 0;

//     if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//         ballCoords.left = field.clientWidth - ball.clientWidth;
//     }

//     if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//         ballCoords.top = field.clientHeight - ball.clientHeight;
//     }

//     ball.style.left = ballCoords.left + 'px';
//     ball.style.top = ballCoords.top + 'px';
// }

//Task 6

// let menuElem = document.getElementById('sweet');
//     let titleElem = menuElem.querySelector('.dropdown_menu__title');

//     titleElem.onclick = function() {
//       menuElem.classList.toggle('open');
//     };

//Task 7

// let panes = document.querySelectorAll('.pane');

// for (let pane of panes) {
//     pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');

//     pane.firstChild.onclick = () => pane.remove();
// }

//Task 8

// function showCover() {
//     let coverDiv = document.createElement('div');
//     coverDiv.id = 'cover-div';

//     // убираем возможность прокрутки страницы во время показа модального окна с формой
//     document.body.style.overflowY = 'hidden';

//     document.body.append(coverDiv);
// }

// function hideCover() {
//     document.getElementById('cover-div').remove();
//     document.body.style.overflowY = '';
// }

// function showPrompt(text, callback) {
//     showCover();
//     let form = document.getElementById('prompt-form');
//     let container = document.getElementById('prompt-form-container');
//     document.getElementById('prompt-message').innerHTML = text;
//     form.text.value = '';

//     function complete(value) {
//         hideCover();
//         container.style.display = 'none';
//         document.onkeydown = null;
//         callback(value);
//     }

//     form.onsubmit = function () {
//         let value = form.text.value;
//         if (value == '') return false; // игнорируем отправку пустой формы

//         complete(value);
//         return false;
//     };

//     form.cancel.onclick = function () {
//         complete(null);
//     };

//     document.onkeydown = function (e) {
//         if (e.key == 'Escape') {
//             complete(null);
//         }
//     };

//     let lastElem = form.elements[form.elements.length - 1];
//     let firstElem = form.elements[0];

//     lastElem.onkeydown = function (e) {
//         if (e.key == 'Tab' && !e.shiftKey) {
//             firstElem.focus();
//             return false;
//         }
//     };

//     firstElem.onkeydown = function (e) {
//         if (e.key == 'Tab' && e.shiftKey) {
//             lastElem.focus();
//             return false;
//         }
//     };

//     container.style.display = 'block';
//     form.elements.text.focus();
// }

// document.getElementById('show-button').onclick = function () {
//     showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
//         alert("Вы ввели: " + value);
//     });
// };