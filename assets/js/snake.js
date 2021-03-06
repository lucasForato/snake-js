const snakeDom = document.getElementById('snake');
const speed = 120;
let gameover = false;

class Snake {
    constructor() {
        this._x = Math.floor(Math.random() * 20 + 1);
        this._y = Math.floor(Math.random() * 20 + 1);
        this._tail = [];
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(coordinate){
        this._x = coordinate;
    }

    set y(coordinate) {
        this._y = coordinate;
    }

    goUp(){
        this.tailTrace();
        if(this._y !== 1) {
            this._y--;
        } else {
            this._y = 20;
        }
        if(counter > 0) {
            gameover = this.checkTouch(this._tail);
        } 
    }

    goDown(){
        this.tailTrace();
        if(this._y !== 20) {
            this._y++;
        } else {
            this._y = 1;
        }
        if(counter > 0) {
            gameover = this.checkTouch(this._tail);
        }
    }

    goLeft(){
        this.tailTrace();
        if(this._x !== 1) {
            this._x--;
        } else {
            this._x = 20;
        }
        if(counter > 0) {
            gameover = this.checkTouch(this._tail);
        }
    }

    goRight(){
        this.tailTrace();
        if(this._x !== 20) {
            this._x++;
        } else {
            this._x = 1;
        }
        if(counter > 0) {
            gameover = this.checkTouch(this._tail);
        }
    }

    checkMouth(obj) {
        if(this._x === obj._x && this._y === obj._y) {
            this.growTail(obj._x, obj._y);
            obj.generateNewLocation();
        }
    }

    checkTouch(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(this.x === arr[i]._x && this.y === arr[i]._y) {
                return true;
            }
        }
        return false;
    }

    growTail(x, y) {
        const newTail = {class: `tail${this._tail.length}`, _x: x, _y: y};
        this._tail.push(newTail)
        const tailDom = document.createElement('div');
        tailDom.className = newTail.class;
        tailDom.className = 'tail';
        tailDom.id = newTail.class;
        tailDom.style.gridRow = this._tail[0]._y;
        tailDom.style.gridColumn = this._tail[0]._x;
        document.getElementById('canvas').appendChild(tailDom);
    }

    tailTrace() {
        for (let i = this._tail.length - 1; i >= 0; i--) {
            if(i === 0) {
                const tail = document.getElementById(this._tail[i].class);
                tail.style.gridRow = this.y;
                tail.style.gridColumn = this.x;
                this._tail[i]._x = this.x;
                this._tail[i]._y = this.y;
            }

            else {
                const tail = document.getElementById(this._tail[i].class);
                tail.style.gridRow = this._tail[i-1]._y;
                tail.style.gridColumn = this._tail[i-1]._x;
                this._tail[i]._x = this._tail[i-1]._x;
                this._tail[i]._y = this._tail[i-1]._y;
            }
        }
    }
};

const snake = new Snake();

const updateSnake = () => {
    snakeDom.style.gridRow = snake.y;
    snakeDom.style.gridColumn = snake.x;
    
}

