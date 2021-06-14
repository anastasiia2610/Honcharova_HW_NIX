'use strict';

const output = document.getElementById('output');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    const min = +document.getElementById('min').value;
    const max = +document.getElementById('max').value;
    const count = +document.getElementById('count').value;
    const randomArray = randomNumber(min, max, count);
    createItem(randomArray);
    console.log(randomArray);
})

function randomNumber(min, max, count) {
    const result = [];
    for(let i = 0; i < count; i++){
        let randomNumber = Math.floor(Math.random() * (max + 1 - min));
        result.push(randomNumber);
    }
    return result;
}

function createItem(array){
    output.innerHTML = '';
    array.map((elem, index) =>{
        let count = index + 1;
        let item = `<p class='output-item'>${count}. Number: ${elem}</p>`;
        output.insertAdjacentHTML('beforeend', item);
    })
}
