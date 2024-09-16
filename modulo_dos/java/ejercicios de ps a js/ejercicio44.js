let ran=(min, max)=>{
    return Math.floor(Math.random()* (max-min)+min);
}

let arreglo_pares=[];
let promedio=0;

let sum=0;

for(i=0; i<=6; i++){
    arreglo_pares[i]=ran(1, 10);
    console.log(arreglo_pares);
    if(arreglo_pares[i]%2===0){
        sum=sum+arreglo_pares[i]
    }
}
console.log('los pares encontrados son'+ sum);