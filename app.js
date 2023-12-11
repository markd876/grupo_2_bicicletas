const express = require('express')
const path = require('path')
const app = express()

const carritoRoutes = require('./src/routes/carrito.routes.js')
const productosRoutes = require('./src/routes/productos.routes.js')
const userRoutes = require('./src/routes/user.routes.js')
const edicionRoutes = require('./src/routes/edicion.routes.js')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/carrito', carritoRoutes)
app.use('/producto', productosRoutes)
app.use('/login', userRoutes)
app.use('/register', userRoutes)
app.use('/edicion', edicionRoutes)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, ()=>{
    console.log('Servidor corriendo puerto 3000')
})

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/register', (req,res)=>{
    res.render('register')
})
app.get('/login', (req,res)=>{
    res.render('login')
})