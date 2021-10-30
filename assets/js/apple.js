class Apple {
    constructor() {
        this._x = Math.floor(Math.random() * 20 + 1);
        this._y = Math.floor(Math.random() * 20 + 1);
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    generateNewLocation(){
        this._x = Math.floor(Math.random() * 20 + 1);
        this._y = Math.floor(Math.random() * 20 + 1);
        updateApple();
        updateScore();
    }
}

const apple = new Apple();
const appleDom = document.createElement('div');
appleDom.className = 'apple';
appleDom.style.gridRow = apple.y;
appleDom.style.gridColumn = apple.x;
document.getElementById('canvas').appendChild(appleDom);

const updateApple = () => {
    appleDom.style.gridRow = apple.y;
    appleDom.style.gridColumn = apple.x;
}