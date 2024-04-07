const express = require('express')
const controllers = require('../controllers/user.controller')
const router = express.Router()
const multer  = require('multer')
const isAuth = require('../../middlewares/isAuth')
const { check } = require('express-validator')
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

  //VALIDACION LOGIN
const validateLog = [
  check('login_email')
    .notEmpty().withMessage('debes rellenar el campo email').bail()
    .isEmail().withMessage('debes ingresar un email valido'),
  check('login_password')
    .notEmpty().withMessage('Debes llenar el campo de contraseña').bail()
    .isLength({ min: 8}).withMessage('La contraseña debe de tener al menos 8 caracteres')  
]
const validateReg = [
  check('register_nombre')
    .notEmpty().withMessage('Debes rellenar el campo nombre').bail()
    .isLength({ min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
  check('register_apellido')
    .notEmpty().withMessage('Debes rellenar el campo de apellido').bail()
    .isLength({ min:3}).withMessage('El campo apellido debe tener al menos 3 caracteres'),
  check('register_email')
    .notEmpty().withMessage('debes rellenar el campo email').bail()
    .isEmail().withMessage('debes ingresar un email valido'),
  check('register_password')
    .notEmpty().withMessage('Debes llenar el campo de contraseña').bail()
    .isLength({ min: 8}).withMessage('La contraseña debe de tener al menos 8 caracteres')
    ]


router.get('/login', controllers.login)
router.get('/register', controllers.register)
router.post('/registro', upload.single('user_imagen'), validateReg, controllers.registro)
router.post('/login', validateLog, controllers.logearse)
router.get('/logout', controllers.logout)

/* app.post('/register', upload.single('user_imagen'), (req,res)=>{
    console.log(req.file.user_imagen)
}) */


module.exports = router