let array= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,10],
    [11,12,13,14],
];
let matrizRotado = [],
matrizRotadoAbajo=[],
matrizRotadoIzquierda=[]

for (let i = 0; i < 4; i++) {
    matrizRotado[i] = [];
    matrizRotadoAbajo[i] = [];
    matrizRotadoIzquierda[i] = [];
    for (let j = 0; j < 4; j++) {
        matrizRotado[i][j] = array[3 - j][i]; 
        matrizRotadoIzquierda[i][j] = array[j][3 - i];
        matrizRotadoAbajo[i][j] = array[3 - i][j];

    }
    console.log(`${array[i]}     ${matrizRotado[i]}    ${matrizRotadoAbajo[i]}     ${matrizRotadoIzquierda[i]}`);    
}