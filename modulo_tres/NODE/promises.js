// const promises = require('node:fs/promises');
const {readFile} = require('node:fs/promises');

/*promises.readFile('text.txt', 'utf-8')
    .then((data)=>{
    console.log(data);
}) .catch((err)=>{
    console.error(`error reading file: ${err}`);
});*/

/*Promise.all([
    promises.readFile('text.txt', 'utf8'),
    promises.readFile('texto.txt', 'utf8'),
    promises.readFile('muchoTexto.txt','utf8')
]).then((
    [file1, file2, file3]
)=> {
    console.log(file1);
    console.log(file2);
    console.log(file3);
}).catch((err) => {
    console.error(`error reading files: ${err}`);
});*/

async function promesas(){
    try{
        let data3= await readFile('muchoTexto.txt', 'utf8');
        console.log(data3);
    } catch(err) {

    }

    console.log('-------');
    let data2 = await readFile('text.txt', 'utf8');
    console.log(data2);
    console.log('------9090');
    let data = await readFile('texto.txt', 'utf8');
    console.log(data);
    console.log('----1010');
}
promesas();