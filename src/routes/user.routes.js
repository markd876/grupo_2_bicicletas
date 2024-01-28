const express = require('express')
const controllers = require('../controllers/user.controller')
const router = express.Router()
const multer  = require('multer')
const isAuth = require('../../middlewares/isAuth')
/* const upload = multer({ dest: './public/images/users' }) */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/users')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '--' + file.originalname.replace(/\s/g, ''))
    }
  })
  
  const upload = multer({ storage: storage })

router.get('/login', controllers.login)
router.get('/register', controllers.register)
router.post('/registro', upload.single('user_imagen'),controllers.registro)
router.post('/login', controllers.logearse)
router.get('/logout', controllers.logout)

/* app.post('/register', upload.single('user_imagen'), (req,res)=>{
    console.log(req.file.user_imagen)
}) */


module.exports = router