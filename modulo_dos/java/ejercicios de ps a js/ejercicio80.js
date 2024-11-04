function permutaciones(array) {
    if (array.length === 0) return [[]];

    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        const restante = array.slice(0, i).concat(array.slice(i + 1));
        const permRestantes = permutaciones(restante);
        
        for (let perm of permRestantes) {
            resultado.push([elemento].concat(perm));
        }
    }
    return resultado;
}

const elementos = [1, 2, 3];
const todasLasPermutaciones = permutaciones(elementos);

console.log(todasLasPermutaciones);
