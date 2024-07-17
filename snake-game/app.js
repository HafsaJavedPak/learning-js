// When you initially set the direction variable to up or left, why does it repeat and start from the start when it crosses the border? but not for right and down.
// clearInterval()?????

// define HTML elements
const board = document.getElementById("game-board")
const gridSize = 20;
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');

// define game var
let snake = [{x:10, y:10}];
let food = generateFood();
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200; //ms
let gameStarted = false;
let highScore = 0;

// draw game map, snake, food
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
}

// draw snake

function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div','snake');
        // console.log(snakeElement);
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    })
}

// creating a snake or food cube/div
function createGameElement (tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// set the position of snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// testing draw function
// draw();

// Draw food function
function drawFood() {
    if (gameStarted){
        const foodElement = createGameElement('div','food');
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
}

// generate food function
function generateFood() {
    const x = Math.round(Math.random() * gridSize);
    const y = Math.round(Math.random() * gridSize);
    return {x, y};
}

// moving the snake
function move() {
    const head = {...snake[0]};
    switch(direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'right':
            head.x++;
            break;
        case 'left':
            head.x--;
            break;
        
    }
    console.log(`head_x : ${head.x} , head_y : ${head.y}`);
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval (() => {
            move();
            checkCollision(),
            draw();
        }, gameSpeedDelay);
    } 
    else {
        snake.pop();
    }
}

function startGame () {
    gameStarted = true;
    instructionText.style.display = 'None';
    logo.style.display = 'None';
    gameInterval = setInterval (() => {
        move(),
        checkCollision(),
        draw();
    }, gameSpeedDelay);
}

// test moving
// setInterval(() => {
//     move();
//     draw();
// }, 200); 

// key pressed event listener
function handleKeyPressed(event) {
    if ((!gameStarted && event.code === 'Space') || 
    (!gameStarted && event.key === ' ')
    ) { 
        startGame();
    }

    else if (gameStarted) {
        switch(event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            
            case 'ArrowRight':
                direction = 'right';
                break;
            
            case 'ArrowLeft':
                direction = 'left';
                break;
            
        }
    }
}


function increaseSpeed() {
    console.log(`Game Speed delay ${gameSpeedDelay}`);
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -=5;
    }
    else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3;
    }
    else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2;
    }
    else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1;
    }
}

function checkCollision() {
    const head = {...snake[0]};
    console.log(snake);
    // to check for colliiosn with walls
    if (head.x < 0 || head.x > gridSize || head.y < 0 || head.y > gridSize) {
        console.log('colliosn with walls');
        resetGame();
    }
    
    // check colliison with istledf
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            console.log('collision with itelsef');
            resetGame();
        }
    }
}

function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{x:10, y:10}];
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
    
}

function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3,'0');
}

function updateHighScore() {
    const currentScore = snake.length - 1;
    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreText.textContent = highScore.toString(highScore).padStart(3,'0');
    }
    highScoreText.style.display = 'block';
}

function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.display = 'block';
    logo.style.display = 'block';
}

document.addEventListener('keydown', handleKeyPressed); 