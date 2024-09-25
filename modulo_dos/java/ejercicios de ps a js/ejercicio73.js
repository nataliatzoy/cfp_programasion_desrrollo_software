//suma de elementos
function matriz(x,suma,array){
    if(x >= 0){
    suma = suma + array[x] 
        console.log(suma);
        x = x -1
        matriz(x,suma,array)
    }


}

let array = [1, 2, 3, 4, 5]; 

matriz(2,0,array)