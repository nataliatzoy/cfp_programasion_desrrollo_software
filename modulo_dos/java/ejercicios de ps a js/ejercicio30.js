let conseguir = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguir(90,101)
contador = 0;

do {
    num = conseguir(90,101)
    console.log(num);
    console.log("Contraseña invalida");
    contador += 1
    //console.log(suma);
} while (num != 100);
console.log("Contraseña valida");
