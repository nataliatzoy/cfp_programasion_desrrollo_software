function palabra(cadena){
   if (cadena === ''){
    return '';
   }else {
    return cadena.charAt(cadena.length -1)+ palabra(cadena.substring(0, cadena.length-1))
   }
}

let cadena = 'pajaro';
console.log(palabra(cadena));