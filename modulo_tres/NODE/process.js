console.log(process.argv);

console.log(`Hola bienvenido ${process.argv[2]}`);

process.on('exit', ()=> {
    console.log('el proceso va a terminar');
})

console.log(process.cwd());

console.log(process.env.HOSTNAME);