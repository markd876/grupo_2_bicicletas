const express = require('express')
const controllers = require('../controllers/user.controller')
const router = express.Router()

router.get('/login', controllers.login)
router.get('/register', controllers.register)
router.post('/register', controllers.registro)

module.exports = router