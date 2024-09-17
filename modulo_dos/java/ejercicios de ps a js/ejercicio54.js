let array = [
    [8,2,4],
    [2,10,6],
    [1,50,1]
];

let max=0
for(i=0; i<3;i++){
    for(j=0; j<4; j++){
        if(max < array[i][j]){
            max=array[i][j]
        }
    }
    console.log(`en la fila ${i+1} el numero maximo es: ${max}`);
}

