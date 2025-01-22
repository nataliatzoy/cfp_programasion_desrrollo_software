//html elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSing = document.getElementById('gameOver');

//game settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};

//game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquare;
let moverInterval;

const setGame = () => {
snake = ['00', '01', '02', '03'];
    score = snake.length;
    direction = 'ArrowRigth';
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill-(squareTypes.emptySquare));
    console.log(boardSquares); 
    board.innerHTML = '';
    emptySquare = [];
}

const startGame = () => {
    setGame ();
}

startButton.addEventListener('click', startGame);