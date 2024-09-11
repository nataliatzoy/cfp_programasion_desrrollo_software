let conseguirRandom=(min, max)=>{
    return Math.floor(Math.random()*(max - min) + min)
}

let num=conseguirRandom(1,120);
let cotrasenia= 56;
let suma=0;

while (num != cotrasenia){
    num=conseguirRandom(1,120);
    console.log(num);
    console.log(cotrasenia);
    suma +=1
}

if(suma>=10){
    console.log('usuario bloqueado '+ suma + 'intentos fallidos');
}else{
    console.log('bienvenido');
}