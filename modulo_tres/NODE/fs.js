const fs = require('node:fs');

// const stats = fs.statSync('texto.txt');
// console.log(stats.isDirectory());
// console.log(stats.isFile());
// console.log(stats.size);

// let data = fs.readFileSync('texto.txt', 'utf-8');
// console.log(data);

fs.readFile('muchoTexto.txt', 'utf-8',
    ()=>{
        console.log('archivo leido');
});
console.log('-------');
let data2 = fs.readFile('text.txt', 'utf-8',
    (err, data)=>{
        if(err){
            console.error(`este es el error 1111:${err}`);
            return;
        }
        console.log(data);
});

console.log('-----9090');
let data = fs.readFile('texto.txt', 'utf-8',
    (err, data)=>{
        if(err){
            console.error(`este es el error:${err}`);
            return;
        }
        console.log(data);
});
console.log('----1010');