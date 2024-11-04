function antesesores(x, y){
    let masculino = ['bisabuelo','abuelo', 'padre','hijo', 'nieto', 'bisnieto']
    let femenino = ['bisabuela','abuela','madre',  'hija', 'nieta', 'bisnieta' ]
    let nombres = (y=== 'm') ? masculino : femenino

    if(x<0){
        return nombres[Math.abs(x)-1];
    }else if(x > 0){
        return nombres[nombres.length + x];
    }else{
        return "yo"
    }
}

console.log(antesesores(0, 'f'));