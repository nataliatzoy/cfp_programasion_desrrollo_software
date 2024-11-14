//ejercicio10 destructuracion en parametros de funcion
function displayProduct({name,price}){
    console.log(`nombre del producto ${name}`);
    console.log(`precio del producto ${price}`)
}

const product={
    name: 'Cafe',
    price: 1000,
}
displayProduct(product)