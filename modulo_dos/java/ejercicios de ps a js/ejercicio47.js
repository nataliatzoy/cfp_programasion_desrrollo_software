let i,contador;
let caracter;
let array = ['a','a', 'c','d','e','9','9','3']
caracter = 'a';
contador = 0;
for(i = 0;i <4;i++){
    if(array[i] == caracter ){
        contador+=1
    }
}
console.log(" aparece ", contador, " veces en el array ");