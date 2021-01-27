const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')//destructuración
const argv = require('./Config/yargs').argv
const color = require('colors/safe')

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado:`,color.magenta(` ${archivo}`)))
        .catch(e => console.log(e));
        break

    default:
        console.log('comando no reconocido');
}

//let base = 10;
// let argv = process.argv;
// let parametro =argv[2];
// let base = parametro.split('=')[1];


