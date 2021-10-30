let key = '';
let counter = 0;
const score = document.getElementById('score');

const keyIdentifier = (e) => {
    key = e.key;
}

window.setInterval(function() {
    if(key === 'w') {
        snake.goUp();
        snake.checkMouth(apple);
        updateSnake();
    } else if(key === 's') {
        snake.goDown();
        snake.checkMouth(apple);
        updateSnake();
    } else if(key === 'a') {
        snake.goLeft();
        snake.checkMouth(apple);
        updateSnake();
    } else if(key === 'd') {
        snake.goRight();
        snake.checkMouth(apple);
        updateSnake();
    }
  }, 200); // 1000 milliseconds (1 second)


const updateScore = () => {
    counter++;
    score.innerHTML = 'score: ' + counter;
}



updateSnake();
document.addEventListener('keypress', keyIdentifier);