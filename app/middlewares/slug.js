const helpers = require('../helpers');

module.exports = {

    /**
     * @method slugUrlFormat
     * @description Middleware que transforma el valor del campo nombre en formato Slug URL
     */
    slugUrlFormat: (req, res, next) => {
        const body = req.body;
        // Setea locals para almacenar el nombre sanitizado y formateado en Slug URL
        res.locals.slugName = helpers.toSlugString(body.nombre);
        next();
    }

}