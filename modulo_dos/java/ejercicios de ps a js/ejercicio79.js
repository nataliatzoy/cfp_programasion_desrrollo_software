function busquedaBinaria(array, valor) {
    let izquierda = 0;
    let derecha = array.length - 1;

    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);

        if (array[medio] === valor) {
            return medio;
        } else if (array[medio] < valor) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }
    return -1; 
}

const numeros = [1, 3, 5, 7, 9, 11, 13];
const indice = busquedaBinaria(numeros, 13);

console.log(indice); 
