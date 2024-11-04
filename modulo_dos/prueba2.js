function anonimos(n){
    return function (a){
        return a + n
    }
}

suma1 = anonimos(9);

console.log(suma1(7));
console.log(suma1(9));
 
