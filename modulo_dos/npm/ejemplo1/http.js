const http = require('node:http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write(
   ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilomemoria.css">
    <style>
    *{
    margin: 0px;
}

body{
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.principal{
    width: 60vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.subcaja{
    width: 40vw;
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2%;
}

.carta{
    width: 100%;;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1s;
}

.carta:hover{
    transform: rotateY(180deg);
    
}

.frente, abajo{
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
}


img{
    width: 100%;
    height: 100%;
}
    </style>
</head>
<body>
    <div class="principal">
        <div class="subcaja">
            <div class="carta">
                <div class="frente"> <img src="https://eldiario.com/wp-content/uploads/2020/09/mario.jpg" alt="mario"></div>
                <div class="abajo"><img src="yoshi.jpg" alt="yoshi"></div>
            </div>

            <div class="carta">
                <div class="frente"> <img src="https://eldiario.com/wp-content/uploads/2020/09/mario.jpg" alt="mario"></div>
                <div class="abajo"><img src="luigi.jpg" alt="luigi"></div>
            </div>

            <div class="carta">
                <div class="frente"> <img src="https://eldiario.com/wp-content/uploads/2020/09/mario.jpg" alt="mario"></div>
                <div class="abajo"><img src="yoshi.jpg" alt="yoshi"></div>
            </div>

            <div class="carta">
                <div class="frente"> <img src="https://eldiario.com/wp-content/uploads/2020/09/mario.jpg" alt="mario"></div>
                <div class="abajo"><img src="toad.jpg" alt="toad"></div>
            </div>

            <div class="carta">
                <div class="frente"> <img src="https://eldiario.com/wp-content/uploads/2020/09/mario.jpg" alt="mario"></div>
                <div class="abajo"><img src="toad.jpg" alt="toad"></div>
            </div>

            <div class="carta">
                <div class="frente"> <img src="https://eldiario.com/wp-content/uploads/2020/09/mario.jpg" alt="mario"></div>
                <div class="abajo"><img src="luigi.jpg" alt="luigi"></div>
            </div>
        </div>    
    </div>
</body>
</html>`
  );
  res.end();
});

server.listen(4000, () => {
  console.log(`Server running`);
});