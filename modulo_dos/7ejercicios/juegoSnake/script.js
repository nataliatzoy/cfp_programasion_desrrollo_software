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
let emptySquares;
let moverInterval;

const drawSnake = () =>{
    snake.forEach( square => drawSquare(square, 'snakeSquare') );
}

const drawSquare = (square, type) =>{
   const [row, column] = square.split('');
   boardSquares[row] [column] = squareTypes [type];
   const squareElement =  document.getElementById(square);
   squareElement.setAttribute('class', `square ${type}`);

   if(type === 'emptySquare'){
    emptySquares.push(square);
   }else{
    if(emptySquares.indexOf(square) !== -1){
        emptySquares.splice(emptySquares.indexOf(square), 1)
    }
   }
}

const setDirection =newDirection => {
    direction = newDirection
}

const directionEvent = key => {
    switch (key.code){
        case 'ArrowUp';
    }
}

const createRandomFood =() => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare(randomEmptySquare, 'foodSquare' )
}

const updateScore= ()=>{
    scoreBoard.innerText = score;
}

const createBoard  = () => {
    boardSquares.forEach ( (row, rowIndex)=> {
        row.forEach( (column, columnIndex)=>{
            const squareValue = `${rowIndex}${columnIndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        })
    })
}

const setGame = () => {
    snake = ['00', '01', '02', '03'];
    score = snake.length;
    direction = 'ArrowRigth';
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares); 
    board.innerHTML = '';
    emptySquares = [];
    createBoard();
}

const startGame = () => {
    setGame ();
    gameOverSing.style.display = 'none';
    startButton.disabled = true;
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener('keydown', directionEvent);
}

startButton.addEventListener('click', startGame);