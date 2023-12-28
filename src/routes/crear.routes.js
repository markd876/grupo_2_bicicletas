const express = require('express')
const controllers = require('../controllers/crear.controller')
const router = express.Router()

router.get('/', controllers.home)

module.exports = router