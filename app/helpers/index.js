const slugify = require('slugify');

class Helpers {

    /**
     * @method toSlugString
     * @description Sanitiza una cadena de caracteres al formato Slug URL
     * 
     * @param {string} value Cadena de caracteres a sanitizar
     */
    toSlugString(value) {
        // Extendemos y agregamos otros caracteres especiales para 
        // considerarlos en el CharMap de caracteres a sanitizar
        // Usamos la librería slugify para sanitizar
        slugify.extend({'.': '-'});
        slugify.extend({'@': '-'});
        slugify.extend({'<': '-'});
        slugify.extend({'>': '-'});
        slugify.extend({'=': '-'});
        slugify.extend({'!': '-'});
        const slugString = slugify(
            String(value),
            {
                replacement: '-',
                lower: true
            }
        );

        return slugString;
    }
}

module.exports = new Helpers();