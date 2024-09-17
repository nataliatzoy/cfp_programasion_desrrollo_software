let matrizA =[
    [1,6,8],
    [8,9,4],
    [5,2,7]
];
let suma1= matrizA.reduce((i,j)=>i+j)

let matrizB=[
    [8,2,6],
    [5,3,1],
    [4,7,3]
];
let suma2= matrizB.reduce((i,j)=>i,j)

console.log(suma1+suma2);
console.log(suma1);
console.log(suma2);
