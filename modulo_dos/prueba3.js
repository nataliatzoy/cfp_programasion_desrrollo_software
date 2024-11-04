function mutar(mutarr){
    let contar = 0;

    for (i = 0; i < mutarr.length; i++) {
        if (mutarr[i] !== 0) {
            mutarr[contar++] = mutarr[i];
        }
    }

    while (contar < mutarr.length) {
        mutarr[contar++] = 0;
    }
}


let mutarray = [0,0,2,0,5];
mutar(mutarray);
console.log(mutarray);
