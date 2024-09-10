let precio=150, 
descuento, 
division, 
descuentoTotal;

if(precio>=100){
    descuento=precio*10
    division=descuento/100
    descuentoTotal=precio-division
    console.log('precio normal', precio);
    console.log('descuento', division);
    console.log('precio con descuento', descuentoTotal);
}