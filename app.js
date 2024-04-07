const express = require('express')
const multer  = require('multer')
const path = require('path')
const app = express()
const upload = multer({ dest: './public/images/users' })
const session = require('express-session')
const cookieParser = require('cookie-parser')
const rememberUser = require('./middlewares/rememberUser.js')


const carritoRoutes = require('./src/routes/carrito.routes.js')
const productosRoutes = require('./src/routes/productos.routes.js')
const userRoutes = require('./src/routes/user.routes.js')
const adminRoutes = require('./src/routes/admin.routes.js')
const crearRoutes = require('./src/routes/crear.routes.js')
const apiRoutes = require('./src/routes/API/api.routes.js')
// prueba db
const db = require('./src/database/models')
//
app.use(cookieParser())

app.use(session({
    secret: '123',
    resave: true,
    saveUninitialized: true,
  }))
app.set('trust proxy', 1)
app.use(express.static('public'))
app.use('/public', express.static(`${__dirname}/images`))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
//prueba db
//alta de pedido
app.post('/crearpedido', (req, res)=>{
    db.pedidos.create(req.body)
        .then( (data)=>{
            res.json( {datos:data})
        })
        .catch( (error)=>{
            res.json( {error: error})
        })
})
//alta de ordenes
app.post('/crearorden', (req, res)=>{
    db.orden.create(req.body)
        .then( (data)=>{
            res.json( {datos:data})
        })
        .catch( (error)=>{
            res.json( {error: error})
        })
})
// mostrar
app.get('/mostrarpedidos', (req,res)=>{
    db.pedidos.findAll({
          include: ['pedidosbicicletas'] 
    })
    .then( (data)=>{
        res.json( {datos:data})
    })
    .catch( (error)=>{
        res.json( {error: error})
    })
})

//fin
app.use(rememberUser)
app.use('/carrito', carritoRoutes)
app.use('/producto', productosRoutes)
app.use('', userRoutes)
app.use('/admin', adminRoutes)
app.use('/crear', crearRoutes)
app.use('/api', apiRoutes)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, ()=>{
    console.log('Servidor corriendo puerto 3000')
})

app.get('/',(req,res)=>{
    user = req.session
    res.render('home', {user})
})
