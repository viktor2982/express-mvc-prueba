const createError = require('http-errors');

class ConfigError {

    constructor(app) {
        // Captura error 404 y avanza al manejador de errores
        app.use(function (req, res, next) {
            next(createError(404));
        });

        // manejador de errores
        app.use(function (err, req, res, next) {
            // setea los locals, y sólo muestra el error en ambiente de desarrollo
            res.locals.message = err.message;
            res.locals.error = req.app.get('app-settings').env === 'development' ? err : {};

            // renderiza la página de error
            res.status(err.status || 500);
            res.render('error');
        });
    }
}

module.exports = app => new ConfigError(app);