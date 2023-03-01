'use strict';
/*
这个是比较冗余的版本
//用于猜测的数字
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//当前一轮剩下的分数
let score = 20;
let highScore = 0;

//点下check按钮
document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);
        // console.log(guess);
        if (guess <= 0 || guess > 20) {
            document.querySelector('.message').textContent = '⛔️ Wrong number!';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';

            document.querySelector('body').style.backgroundColor = '#60b347';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        } else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
                score--;
                document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
            } else {
                //直接输了
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.label-score').textContent = 0;

            }
        }
    })
    // click the again button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
})
*/

//以下为比价低耦合 的版本
//抓取元素
const $ = function(element) {
        return document.querySelector(element);
    }
    //更改元素的展示内容
const resetDisplay = function(element, message) {
        $(element).textContent = message;
    }
    //获取随机数
const getRandom = function() {
        return Math.trunc(Math.random() * 20) + 1;
    }
    //用于猜测的数字
let secretNumber = getRandom();
console.log(secretNumber);
//当前一轮剩下的分数
let score = 20;
let highScore = 0;

$('.check').addEventListener('click', function() {
    const guess = Number($('.guess').value);
    // console.log(guess);
    if (guess <= 0 || guess > 20) {
        resetDisplay('.message', '⛔️ Wrong number!');
    } else if (guess === secretNumber) {
        resetDisplay('.message', '🎉 Correct Number!');
        resetDisplay('.number', secretNumber);
        $('.number').style.width = '30rem';
        $('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            resetDisplay('.highscore', highScore);
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            resetDisplay('.message', (guess > secretNumber ? '📈 Too high!' : '📉 Too low!'));
            score--;
            resetDisplay('.score', score);
        } else {
            //直接输了
            resetDisplay('.message', '💥 You lost the game!');
            resetDisplay('.score', 0);
        }
    }
})

$('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = getRandom();
    resetDisplay('.message', 'Start guessing...');
    resetDisplay('.score', score);
    resetDisplay('.number', '?');
    $('.number').style.width = '15rem';
    $('.guess').value = '';
    $('body').style.backgroundColor = '#222';
})