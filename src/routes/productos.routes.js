const express = require('express')
const controllers = require('../controllers/productos.controller')
const router = express.Router()
const isAuth = require('../../middlewares/isAuth')

router.get('/',isAuth, controllers.home)

module.exports = router