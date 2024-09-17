let matriz=[
    [8,9,5,6,3],
    [3,5,2,1,4],  
    [9,6,3,2,8],
    [4,9,7,2,7],
    [7,4,3,5,1]
];
let suma1=0,
suma2=0
for(i=1; i<5; i++){
    suma1+=matriz[i][i];
    suma2+=matriz[i][4-i];
}
    
console.log(suma1);
console.log(suma2);