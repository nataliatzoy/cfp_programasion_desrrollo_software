function desordenar(cadena){
    if(cadena===''){
        return "";
    } else{
        return desordenar(cadena.substr(1)) + cadena.charAt(0)
    }
}

console.log(desordenar("pajaro"));