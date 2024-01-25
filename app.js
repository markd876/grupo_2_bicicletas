const express = require('express')
const multer  = require('multer')
const path = require('path')
const app = express()
const upload = multer({ dest: './public/images/users' })


const carritoRoutes = require('./src/routes/carrito.routes.js')
const productosRoutes = require('./src/routes/productos.routes.js')
const userRoutes = require('./src/routes/user.routes.js')
const adminRoutes = require('./src/routes/admin.routes.js')
const crearRoutes = require('./src/routes/crear.routes.js')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/carrito', carritoRoutes)
app.use('/producto', productosRoutes)
app.use('', userRoutes)
app.use('/admin', adminRoutes)
app.use('/crear', crearRoutes)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, ()=>{
    console.log('Servidor corriendo puerto 3000')
})

app.get('/',(req,res)=>{
    res.render('home')
})
