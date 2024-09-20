function ordenar(array){
    return array.sort((a,b)=>a-b)
}

let array2=[8,15,20,7,9,2];
let arrayOrdenado= ordenar(array2)

for(i=0; i<array2.length; i++){
    console.log(arrayOrdenado[i]); 
}