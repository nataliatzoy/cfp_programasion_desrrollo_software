function potencia(base, exponente, almacenar){
    if(exponente > 0){
        almacenar = almacenar * base
        console.log(almacenar);
        exponente = exponente - 1
        potencia(base, exponente, almacenar)
    }
}
 
potencia(5,3,1)