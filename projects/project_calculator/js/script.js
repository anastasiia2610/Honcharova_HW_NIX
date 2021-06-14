'use strict';

const output = document.querySelector('.viewier');
let buttonArr = []
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function (event) {
        
        let reg = /[%\/*\-+\(\)=]/gi;
        let regSecond = /[0-9]]/
        let content = output.innerHTML;
        let newArr = []
        if (event.target.value === '=') {
            output.innerHTML = eval(content)
            buttonArr = []
            return;
        } else if (event.target.value === '%' ) {
            if (buttonArr[buttonArr.length - 1] !== '%') {
                buttonArr.push(event.target.value)
                console.log(buttonArr)
                output.innerHTML += event.target.value;
                newArr = content.split('')
                let numArr = content.split(reg)
                let result = (Number(numArr[numArr.length-2]) / 100 * numArr[numArr.length - 1]).toFixed(2)
                console.log(result)
                let strRev = content.split('').reverse()
                let match = content.match(reg)
                let index = strRev.indexOf(match[0])
                newArr.splice(newArr.length-index, index)
                newArr.push(result)
                output.innerHTML = newArr.join('')
            } else {
                return
            }
        } else if (event.target.value.search(reg) !== -1) {
            if (content[content.length - 1] === event.target.value) {
                return;
            } else {
                output.innerHTML += event.target.value;
                return;
            }
        } else if (event.target.value === 'C') {
            output.innerHTML = ''
        } else {
            output.innerHTML += event.target.value;
        }
    })

})

