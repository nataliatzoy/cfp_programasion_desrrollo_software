// mimodulo.mjs
export function saludar() {
    console.log("¡Hola!");
}

export class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {
        return `Hola, me llamo ${this.nombre}.`;
    }
}
