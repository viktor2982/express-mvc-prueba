const path = require('path');
const glob = require('glob');
const app = require('../app');

// Para almacenar los controladores a cargar
const controllers = {};

// Obtiene todos los archivos controladores
const files = glob.sync(path.join(process.cwd(), 'app', 'controllers', '**', '*.js'));

// Recorre los archivos controladores y carga los require de manera dinámica
files.forEach((file) => {
    let temp = controllers;
    const parts = path.relative(path.join(process.cwd(), 'app', 'controllers'), file).slice(0, -3).split(path.sep);

    while (parts.length) {
        if (parts.length === 1) {
            temp[parts[0]] = require(file);
        } else {
            temp[parts[0]] = temp[parts[0]] || {};
        }
        temp = temp[parts.shift()];
    }
});

// Define las rutas de la aplicación desde los controladores cargados
require('./routes/index')(app, controllers);