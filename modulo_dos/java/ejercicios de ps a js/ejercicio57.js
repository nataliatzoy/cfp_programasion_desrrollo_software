let random =(min , max)=>{
    return Math.floor(Math. random()*(max-min)+min)
}

let array2=[]

for(fila = 0; fila < 5; fila++){
    for(columna = 0; columna < 5; columna++){
        array2[fila,columna] = "0"
    }
    console.log(array2);
}

for(caracter = 1; caracter < 4 ; caracter++){
    fila_aleatoria = random(1,4)
    columna_aleatoria = random(1,4)
    array2[fila_aleatoria,columna_aleatoria] =  "*"
    console.log(array2);
}
