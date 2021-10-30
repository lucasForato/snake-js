const snake = document.getElementById('snake');
let key = '';
let snakeObj = {
    x: 10,
    y: 10
}

const updateSnake = () => {
    snake.style.gridRow = snakeObj.y;
    snake.style.gridColumn = snakeObj.x;
}

const goUp = () => {
    if(snakeObj.y !== 1) {
        snakeObj.y--;
    } else {
        snakeObj.y = 20;
    }
    updateSnake();
    
}

const goDown = () => {
    if(snakeObj.y !== 20) {
        snakeObj.y++;
    } else {
        snakeObj.y = 1;
    }
    updateSnake();
}

const goRight = () => {
    if(snakeObj.x !== 20) {
        snakeObj.x++;
    } else {
        snakeObj.x = 1;
    }
    updateSnake();
}

const goLeft = () => {
    if(snakeObj.x !== 1) {
        snakeObj.x--;
    } else {
        snakeObj.x = 20;
    }
    updateSnake();
}


const keyIdentifier = (e) => {
    key = e.key;
}

const keyInspector = (key) => {
    if(key === 'w') {
        goUp();
    } else if(key === 's') {
        goDown(); 
    } else if(key === 'a') {
        goLeft();
    } else if(key === 'd') {
        goRight()
    }
}

window.setInterval(function() {
    if(key === 'w') {
        goUp();
    } else if(key === 's') {
        goDown(); 
    } else if(key === 'a') {
        goLeft();
    } else if(key === 'd') {
        goRight()
    }
  }, 200); // 1000 milliseconds (1 second)


document.addEventListener('keypress', keyIdentifier);