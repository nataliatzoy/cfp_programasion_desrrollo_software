function fibonacci(limite, anterior, actual){
    if(limite > 0 && actual < limite){
        suma= anterior+ actual
        anterior=actual
        actual = suma
        console.log(anterior);
        fibonacci(limite, anterior, actual)
    }
}
console.log(fibonacci(5,0,1));