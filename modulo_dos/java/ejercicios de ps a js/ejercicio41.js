let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let array = [];
let contador = 0;

for(i = 0; i <= 3; i++){
    array[i] = conseguirRandom(1,50)
    contador += array[i]
    console.log(array[i]);
}
console.log("La contador de array es de: " + contador);
