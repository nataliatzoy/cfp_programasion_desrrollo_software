let array=[2,2,2,3,7,5,9,10]

let array2=[];

for(i=0; i<array.length; i++){
    const elemento = array[i];
    if(!array2.includes(array[i])){
        array2.push(elemento)
    }
}

console.log(array2);