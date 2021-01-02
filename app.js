const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        for (let tarea of listado) {
            console.log('============='.green);
            console.log(tarea.descripcion);
            console.log('Completado: ', tarea.completado);
            console.log('============='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            if (argv.completado) {
                console.log('Tarea completada');
            } else {
                console.log('Tarea incompleta');
            }
        } else {
            console.log('La tarea no se ha podido actualizar');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Tarea eliminada');
        } else {
            console.log('La tarea no se ha podido eliminar');
        }
        break;
    default:
        console.log('Comando desconocido');
}