let filaP = 0;
let columnaP = 5;
let movimiento = 0;
let laberinto = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
];

do {
    if ((filaP + 1 ) < 10 && laberinto[filaP + 1][columnaP] != 0) {
        movimiento_aleatorio = 1;
    }else if (columnaP - 1 >= 0 && (laberinto[filaP][columnaP - 1] != 0)) {
        movimiento_aleatorio = 4;
    }else if ((columnaP + 1) < 10 && laberinto[filaP][columnaP + 1] != 0) {
        movimiento_aleatorio = 3;
    }
    else if ((filaP-1) >= 0 && laberinto[filaP - 1][columnaP] != 0) {
        movimiento_aleatorio = 2;
    }

    switch (movimiento_aleatorio) {
        case 1:
            laberinto[filaP][columnaP] = 1;
            filaP++;
            break;
        case 2:
            laberinto[filaP][columnaP] = 1;
            filaP--;
            break;
        case 3:
            laberinto[filaP][columnaP] = 1;
            columnaP++;
            break;
        case 4:
            laberinto[filaP][columnaP] = 1;
            columnaP--;
            break;
    }

    for (let i = 0; i < laberinto.length; i++) {
        for (let j = 0; j < laberinto[i].length; j++) {
            if (i == filaP && j == columnaP) {
                laberinto[i][j] = 8;
            }
        }
    }
    console.log(laberinto);

} while (laberinto[9][6] != 8)

console.log("Has ganado");