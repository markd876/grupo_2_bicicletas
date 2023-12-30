const express = require('express')
const controllers = require('../controllers/crear.controller')
const router = express.Router()

router.get('/', controllers.home)
router.post('/addproduct', controllers.addproduct)

module.exports = router