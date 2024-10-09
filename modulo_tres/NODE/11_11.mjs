// script_principal.mjs
import { saludar, Persona } from './mimodulo.mjs';

saludar();

const persona = new Persona("Juan");
console.log(persona.presentarse());
