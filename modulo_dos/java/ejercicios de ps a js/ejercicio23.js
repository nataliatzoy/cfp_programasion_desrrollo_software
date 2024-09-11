let random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let num = random(-5,6)
let suma = 0;
while(num > 0){
    suma += num
    console.log(num)
    num = random(-5,6)
    console.log(num)
}
console.log(suma);