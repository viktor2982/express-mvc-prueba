const middlewareSlug = require('../middlewares/slug');

class RoutesApp {

    constructor(app, controllers) {
        const { index } = controllers;

        // Ruta del formulario de envío de Nombre (Ruta principal)
        app.get('/', index.sendForm.bind(index));

        // Ruta de respuesta al formulario de envío del Nombre
        // Usa el middleware que sanitiza el valor del campo Nombre a formato Slug URL
        app.post('/response-name', middlewareSlug.slugUrlFormat, index.responseForm.bind(index));

        // app.get('/response-name', middlewareSlug.slugUrlFormat, index.responseForm.bind(index));
    }
}

module.exports = (app, controllers) => new RoutesApp(app, controllers);