function factorial(n, resultado){
    if(n>0){
        resultado=resultado*n
        n=n-1
        factorial(n,resultado)
    }else {
        console.log('el resultado es', resultado);
    } return resultado
}
console.log(factorial(5,2));
