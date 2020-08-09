class IndexController {

    /**
     * @method sendForm (main view)
     * @description Renderiza vista principal para el formulario de envío
     */
    sendForm(req, res) {
        return res.render('send-form');
    }

    /**
     * @method responseForm
     * @description Renderiza vista para la respuesta del formulario de envío
     */
    responseForm(req, res) {
        return res.render('response-form');
    }

}

module.exports = new IndexController();