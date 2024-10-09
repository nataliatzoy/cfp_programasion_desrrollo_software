function almacenar(a) {
    if (a === 0) {
        return 0;
    } else {
        return (a % 10) + almacenar(Math.floor(a / 10));
    }
}

let a = 1234;
console.log(almacenar(a)); 