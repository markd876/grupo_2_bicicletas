const express = require('express')
const controllers = require('../controllers/edicion.controller')
const router = express.Router()

router.get('/', controllers.home)

module.exports = router