function  potencia(base, exponente){
    let resultado=1;

   for(i=0; i<exponente; i++){
    resultado*=base
   }
    return resultado;
}

let resultado= potencia(5,2)
console.log(resultado);
