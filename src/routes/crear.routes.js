const express = require('express')
const controllers = require('../controllers/crear.controller')
const router = express.Router()
const isAuth = require('../../middlewares/isAuth')

router.get('/', isAuth,controllers.home)
router.post('/addproduct',isAuth, controllers.addproduct)

module.exports = router