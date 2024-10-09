export class Usuario{
    constructor(nombre , apellido,edad){
        this.nombre = nombre,
        this.apellido = apellido
        this.edad = edad
    }

    imprimir() {
    return `Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad}`;
    }
}