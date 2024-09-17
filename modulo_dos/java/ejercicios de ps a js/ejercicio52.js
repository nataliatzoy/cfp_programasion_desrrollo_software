let matrizA=[
    [2,8,6],
    [9,7,3],
    [1,5,3]
];
let resultado=0
let matrizB=[];

for(i=0; i<3; i++){
    for(j=0; j<3; j++){
        resultado = matrizA[i][j];
    }
    matrizB[i]= resultado/3
}
console.log(matrizB);