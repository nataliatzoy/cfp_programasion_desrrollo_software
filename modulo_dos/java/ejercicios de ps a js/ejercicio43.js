let ran=(min, max)=>{
    return Math.floor(Math.random()*(max-min)+min)
}

let arreglo_num=[];

for( i=0; i<=10; i++){
    arreglo_num[i]=ran(1,10);
    console.log(arreglo_num);
    
}
console.log("El promedio de los alumnos es: " +  arreglo_num.reduce((a,b) => a+b)/ 10);