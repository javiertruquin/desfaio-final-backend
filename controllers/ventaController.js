const Venta = require('../models/Venta');
const { validationResult } = require('express-validator');

exports.obtenerVenta = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }
    try {
        //nuevo mensaje
        let venta = new Venta(req.body);

        //guardar mensaje
        await venta.save();

        //mensaje de exito
        res.send('Mensaje enviado');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error al enviar el mensaje');
    }
};
