let key = '';
let counter = 0;
const score = document.getElementById('score');

const keyIdentifier = (e) => {
    key = e.key;
}

function cellCode(e) {
    const pressed = e.target.innerHTML;
    if(pressed === 'up') {
        key = 'w';
    } else if (pressed === 'down') {
        key = 's';
    } else if (pressed === 'left') {
        key = 'a';
    } else if (pressed === 'right') {
        key = 'd';
    }
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

    if(gameover) {
        alert("GAME OVER!");
        window.location.reload();
    }

  }, speed); // 1000 milliseconds (1 second)


const updateScore = () => {
    counter++;
    score.innerHTML = 'score: ' + counter;
}





updateSnake();
document.addEventListener('keypress', keyIdentifier);