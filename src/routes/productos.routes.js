const express = require('express')
const controllers = require('../controllers/productos.controller')
const router = express.Router()

router.get('/', controllers.home)

module.exports = router