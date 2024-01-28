const express = require('express')
const controllers = require('../controllers/admin.controller')
const isAuth = require('../../middlewares/isAuth')
const router = express.Router()

router.get('/', isAuth,controllers.home)
router.get('/edit/:id', controllers.edit)
router.post('/edit/updateprod/:id', controllers.update)
router.get('/delete/:id', controllers.delete)

module.exports = router