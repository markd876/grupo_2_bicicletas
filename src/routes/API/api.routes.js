const express = require('express')
const controllers = require('../../controllers/API/api.controllers.js')
const router = express.Router()

//router.get('/edit/:id', controllers.edit)
//router.post('/edit/updateprod/:id', controllers.update)

router.get('/users', controllers.users)
router.get('/products', controllers.products)
router.get('/bicicletas', controllers.bicicletas)




module.exports = router