let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num=conseguirRandom(1,20)
factorial = 1;
for(i=1; i<= num; i++){
    factorial= factorial*i
}
console.log('el factorial de ',num, 'es ',factorial);
