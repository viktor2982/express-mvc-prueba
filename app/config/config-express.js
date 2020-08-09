const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const config = require('./config');

class ConfigExpress {

    constructor(app) {
        // se setea la configuración del archivo config.js
        app.set('app-settings', config);
        // Se exporta la configuración para ser usada en otros archivos
        app.locals.settings = app.get('app-settings');

        // Se configura servidor para uso de platillas pug en las vistas
        app.set('views', path.join(process.cwd(), 'app', 'views'));
        app.set('view engine', 'pug');

        // Carpeta estatica de archivos (css, images)
        app.use('/public', express.static(`${process.cwd()}/public`));
        // Carpeta de los url scripts para uso de bootstrap y/o jquery
        app.use('/node_modules', express.static(path.join(`${process.cwd()}/node_modules`)));

        // Para los verbs HTTP get params
        app.use(bodyParser.json()); // para soportar JSON-encoded en el body
        app.use(bodyParser.urlencoded({ // para soportar URL-encoded en el body
            extended: true,
        }));
    }
}

module.exports = app => new ConfigExpress(app);