'use strict';

let modal = document.querySelector('.modal');

let modalTitle = document.querySelector('.modal_title');

let rewardText = document.querySelector('.reward_text');

let modalButtonYes = document.querySelector('.modal_button_yes');

let modalButtonNo = document.querySelector('.modal_button_no');

let stageReward = document.querySelectorAll('.stage-reward');

let dots = document.querySelectorAll('.dot');

let answerButton = document.querySelector('.answer_button');

let questionMain = document.querySelector('.question_main');

let questionHolder = document.querySelector('.question_holder');

let questionItem = document.querySelectorAll('.question_item');

let questionText = document.querySelector('.question_text');

let startButton = document.querySelector('.start_button');

let input = document.querySelectorAll('.question_choose');

let callFriend = document.querySelector('.call-friend');

let fiftyPercent = document.querySelector('.fifty-percent');

let phoneText = document.querySelectorAll('.phone_text');

let phoneWrapper = document.querySelector('.phone_wrapper');

let stage = 0;

function startGame() {
    questionMain.classList.remove('disabled');
    startButton.classList.add('disabled');
    stage = 0;
    questionGenerator();
    stageRewardGenerator();
    fillDots();
}

startButton.onclick = startGame;

function stageRewardGenerator() {
    for (let i = 0; i < stageReward.length; i++) {
        stageReward[i].innerHTML = questions[i].cost;
    }
}

function questionGenerator() {
    questionText.innerHTML = questions[stage].question;

    let arr = [0, 1, 2, 3];
    for (let i = 0; i < questionItem.length; i++) {
        let answerRandomizer =  Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
        let q = arr[answerRandomizer];
        questionItem[i].innerHTML = questions[stage].answer[q];
        input[i].value = questions[stage].answer[q];
        arr.splice(answerRandomizer, 1);
    }

}

answerButton.onclick = function () {
    for (let i = 0; i < 4; i++) {
        if (input[i].checked) {
            if (input[i].value === questions[stage].correct) {
                
                input[i].checked = false;
                if (stage >= 14) {
                    gameEnd('Поздравляем, Вы победили!');
                    return;
                } else {
                    stage++;
                    console.log(stage);
                    fillDots();
                    questionGenerator();
                }
            } else {
                
                gameEnd('Вы проиграли :(');
            }
        }
        input[i].disabled = false;
    }
}

function fillDots() {
    if (stage === 0) {
        dots[stage].style.background = '#40a6ff';
        dots[stage].style.borderColor = '#40a6ff';
    } else if (stage === 5 || stage === 10) {
        dots[stage - 1].style.background = '#ffbf29';
        dots[stage - 1].style.borderColor = '#ffbf29';
        dots[stage].style.background = '#40a6ff';
        dots[stage].style.borderColor = '#40a6ff';

    } else if(stage === 15){
        dots[stage - 1].style.background = '#1726cf';
        dots[stage - 1].style.borderColor = '#1726cf';
    } else {
        dots[stage - 1].style.background = '#1726cf';
        dots[stage - 1].style.borderColor = '#1726cf';
        dots[stage].style.background = '#40a6ff';
        dots[stage].style.borderColor = '#40a6ff';
    }
}

function callFriendHelp() {
    callFriend.setAttribute('disabled', 'disabled');
    phoneWrapper.classList.remove('disabled_phone');

    setTimeout(function () {
        phoneText[0].innerHTML = questions[stage].question;
    }, 500)
    setTimeout(function () {
        phoneText[1].innerHTML = 'Ща сек';
    }, 1300)
    setTimeout(function () {
        let friendAnswer = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        phoneText[2].innerHTML = 'Я думаю это ' + questions[stage].answer[friendAnswer];
    }, 2100)
    setTimeout(function () {
        phoneText[3].innerHTML = 'От души, брат';
    }, 2700)
    setTimeout(function () {
        phoneWrapper.classList.add('disabled_phone');
    }, 5000)

    for (let i = 0; i < phoneText.length; i++) {
        phoneText[i].innerHTML = '';
    }
}

callFriend.onclick = callFriendHelp;

function fiftyPercentHelp() {
    fiftyPercent.setAttribute('disabled', 'disabled');

    let notCorrect = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i].value !== questions[stage].correct) {
            notCorrect.push(i)
        }
    }

    for (let k = 0; k < 2; k++) {
        let num = Math.floor(Math.random() * ((notCorrect.length - 1) - 0 + 1)) + 0;
        let z = notCorrect[num];
        input[z].setAttribute('disabled', 'disabled');
        notCorrect.splice(num, 1);
    }
}

fiftyPercent.onclick = fiftyPercentHelp;

function gameEnd(text) {
    modal.classList.remove('disabled');
    questionHolder.classList.add('disabled');

    let reward = 0;
    if (stage >= 5 && stage < 10) {
        reward = 1000;
    } else if (stage >= 10 && stage < 14) {
        reward = 32000;
    } else if (stage === 14) {
        reward = 1000000;
    }

    modalTitle.innerHTML = text;
    rewardText.innerHTML = reward + ' $';
}

modalButtonYes.onclick = gameRestart;

function finishGame() {
    window.close();
}

modalButtonNo.onclick = finishGame;

function gameRestart() {
    fiftyPercent.removeAttribute('disabled');
    callFriend.removeAttribute('disabled');
    stage = 0;
    questionGenerator();
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.background = '#ffffff';
        dots[i].style.borderColor = '#1726cf';
    }

    for (let z = 0; z < input.length; z++) {
        input[z].checked = false;
    }

    modal.classList.add('disabled');
    questionHolder.classList.remove('disabled');
}


