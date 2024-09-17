function  descuento(){
    const producto=[
        ['playera','100','a'],
        ['camisa', '150', 'b'],
        ['vestido', '300', 'c']
    ];

    const categoria=[
        ['a','10'],
        ['b', '5'],
        ['c','0']
    ];

    for( i=0; i<producto.length; i++){
        for(ic=0; ic<categoria.length; ic++){
            if(producto[i][2] === categoria[ic][0]){
                const descuento= parseFloat(producto[i][1]) * (parseFloat(categoria[ic][1])/100);
                const resultado = parseFloat(producto[i][1])-descuento;
                console.log(`${producto[i][0]} | ${producto[i][1]} | ${categoria[ic][0]} | ${descuento} | ${resultado}`);
            }
        }
    }
}

descuento()