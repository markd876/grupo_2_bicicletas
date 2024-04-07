const express = require('express')
const controllers = require('../controllers/admin.controller')
const isAuth = require('../../middlewares/isAuth')
const router = express.Router()
const { check } = require('express-validator')

//CREAR PRODUCTO VALIDATION
const validateEdit = [
    check('producto_nombre')
        .notEmpty().withMessage('Debes completar el campo nombre').bail()
        .isLength({ min:5}).withMessage('El nombre del producto debe de tener al menos 5 caracteres'),
    check('producto_descripcion')
        .notEmpty().withMessage('Debes completar la descripcion de tu producto').bail()
        .isLength({min:20}).withMessage('la descripcion debe de tener al menos 20 caracteres'),
    check('producto_color')
        .notEmpty().withMessage('Debes seleccionar al menos un color para el producto'),
    check('producto_precio')
        .notEmpty().withMessage('debes ponerle un precio a tu producto').bail()
        .isDecimal().withMessage('solo puedes ingresar numeros'),
]


router.get('/', isAuth,controllers.home)
router.get('/edit/:id', controllers.edit)
router.post('/edit/updateprod/:id', validateEdit, controllers.update)
router.get('/delete/:id', controllers.delete)

module.exports = router