let caracter ='f';
let encontrado = false;
let array = ['a','b', 'c','d','e'];

array.forEach(function(elemento) {
    if(elemento === caracter){
        console.log('el caracter', caracter,'se encuentra en el array');
        encontrado = true;
    }
});
if(!encontrado){
    console.log('el caracter', caracter,'no se encuentra en el array');
}
