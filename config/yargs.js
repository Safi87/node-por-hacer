const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Completa la tarea por hacer'
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tareas por hacer', { completado })
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Completa una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}