function num(){
    let nume=4;
    let fac=1;
    let i=1;

    while(i <= nume){
        fac=fac*i
        i=i+1
    }

    let resultado=fac;
    return resultado;
}
let resultado=num();
console.log(resultado);