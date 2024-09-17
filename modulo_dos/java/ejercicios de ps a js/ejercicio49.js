let array=[100,2,20,4,60,3];
let menor_a


for(i=1;i<6;i++){
    for(j=1; j<6;j++){
        if (array[i]>array[j]){
            menor_a=array[j]
            array[j]=array[i]
            array[i]=menor_a
        }
    }
}

for(i=1; i<6;i++){
    console.log(array[i]);
}