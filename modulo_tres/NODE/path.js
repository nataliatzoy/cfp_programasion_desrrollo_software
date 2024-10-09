const path = require('node:path');

//sep para conocer el separador de directorios
console.log(path.sep);

//unen rutas
let newPath= path.join('C:/Users/anatzoy/Pictures', 'cfpimg/banner1-cfp.jpg');
console.log(newPath);

//basename para obtener el nobre del archivo
let fileName = path.basename(newPath);
console.log(fileName);

//dirname para obtener el directorio
let dirName = path.dirname(newPath);
console.log(dirName);
//para obtener la extension
let extName = path.extname(newPath);
console.log(extName);