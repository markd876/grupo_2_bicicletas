const express = require('express')
const controllers = require('../controllers/crear.controller')
const router = express.Router()
const isAuth = require('../../middlewares/isAuth')
const { check } = require('express-validator')

//CREAR PRODUCTO VALIDATION
const validateCreate = [
    check('productoNombre')
        .notEmpty().withMessage('Debes completar el campo nombre').bail()
        .isLength({ min:5}).withMessage('El nombre del producto debe de tener al menos 5 caracteres'),
    check('productoDesc')
        .notEmpty().withMessage('Debes completar la descripcion de tu producto').bail()
        .isLength({min:20}).withMessage('la descripcion debe de tener al menos 20 caracteres'),
    check('productoColor')
        .notEmpty().withMessage('Debes seleccionar al menos un color para el producto'),
    check('productoPrecio')
        .notEmpty().withMessage('debes ponerle un precio a tu producto').bail()
        .isDecimal().withMessage('solo puedes ingresar numeros'),
]

router.get('/', isAuth,controllers.home)
router.post('/addproduct', validateCreate, isAuth, controllers.addproduct)

module.exports = router