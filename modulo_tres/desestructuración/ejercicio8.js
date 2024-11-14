//ejercicio8 valores predeterminados
const setting = { volumen: 5,  };
const { volumen, brillo = 50 } = setting;
console.log(volumen, brillo); 