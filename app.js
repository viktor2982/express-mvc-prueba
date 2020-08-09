// Se crea el servidor express
const express = require('express');
const app = express();

// Configuración del servidor express
require('./app/config/config-express')(app);

// Exporta la instancia de app para utilizarla en otros archivos
module.exports = app;

// Carga las rutas de la aplicación
require('./app/routes');

// Configuración del manejo de errores
require('./app/config/config-error')(app);

// Se levanta el servidor
app.listen(app.get('app-settings').port, function () {
    console.log('Listening port: ' + app.get('app-settings').port)
});
